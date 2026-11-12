# `googleVertexAiTrainingPipeline` Submodule <a name="`googleVertexAiTrainingPipeline` Submodule" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiTrainingPipeline <a name="GoogleVertexAiTrainingPipeline" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline google_vertex_ai_training_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipeline(Construct Scope, string Id, GoogleVertexAiTrainingPipelineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig">GoogleVertexAiTrainingPipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig">GoogleVertexAiTrainingPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig">PutInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload">PutModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetInputDataConfig">ResetInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetModelToUpload">ResetModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetParentModel">ResetParentModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(GoogleVertexAiTrainingPipelineEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

---

##### `PutInputDataConfig` <a name="PutInputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig"></a>

```csharp
private void PutInputDataConfig(GoogleVertexAiTrainingPipelineInputDataConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

---

##### `PutModelToUpload` <a name="PutModelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload"></a>

```csharp
private void PutModelToUpload(GoogleVertexAiTrainingPipelineModelToUpload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVertexAiTrainingPipelineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInputDataConfig` <a name="ResetInputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetInputDataConfig"></a>

```csharp
private void ResetInputDataConfig()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetModelToUpload` <a name="ResetModelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetModelToUpload"></a>

```csharp
private void ResetModelToUpload()
```

##### `ResetParentModel` <a name="ResetParentModel" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetParentModel"></a>

```csharp
private void ResetParentModel()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiTrainingPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiTrainingPipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiTrainingPipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiTrainingPipeline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiTrainingPipeline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleVertexAiTrainingPipeline resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiTrainingPipeline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiTrainingPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiTrainingPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList">GoogleVertexAiTrainingPipelineErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUpload">ModelToUpload</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference">GoogleVertexAiTrainingPipelineModelToUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference">GoogleVertexAiTrainingPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskMetadata">TrainingTaskMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfigInput">InputDataConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelIdInput">ModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUploadInput">ModelToUploadInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModelInput">ParentModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinitionInput">TrainingTaskDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputsInput">TrainingTaskInputsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModel">ParentModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinition">TrainingTaskDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputs">TrainingTaskInputs</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.error"></a>

```csharp
public GoogleVertexAiTrainingPipelineErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList">GoogleVertexAiTrainingPipelineErrorList</a>

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfig"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigOutputReference InputDataConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigOutputReference</a>

---

##### `ModelToUpload`<sup>Required</sup> <a name="ModelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUpload"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadOutputReference ModelToUpload { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference">GoogleVertexAiTrainingPipelineModelToUploadOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeouts"></a>

```csharp
public GoogleVertexAiTrainingPipelineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference">GoogleVertexAiTrainingPipelineTimeoutsOutputReference</a>

---

##### `TrainingTaskMetadata`<sup>Required</sup> <a name="TrainingTaskMetadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskMetadata"></a>

```csharp
public string TrainingTaskMetadata { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpecInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputDataConfigInput`<sup>Optional</sup> <a name="InputDataConfigInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfigInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfig InputDataConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelIdInput"></a>

```csharp
public string ModelIdInput { get; }
```

- *Type:* string

---

##### `ModelToUploadInput`<sup>Optional</sup> <a name="ModelToUploadInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUploadInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUpload ModelToUploadInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

---

##### `ParentModelInput`<sup>Optional</sup> <a name="ParentModelInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModelInput"></a>

```csharp
public string ParentModelInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleVertexAiTrainingPipelineTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a>

---

##### `TrainingTaskDefinitionInput`<sup>Optional</sup> <a name="TrainingTaskDefinitionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinitionInput"></a>

```csharp
public string TrainingTaskDefinitionInput { get; }
```

- *Type:* string

---

##### `TrainingTaskInputsInput`<sup>Optional</sup> <a name="TrainingTaskInputsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputsInput"></a>

```csharp
public string TrainingTaskInputsInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `ParentModel`<sup>Required</sup> <a name="ParentModel" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModel"></a>

```csharp
public string ParentModel { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TrainingTaskDefinition`<sup>Required</sup> <a name="TrainingTaskDefinition" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinition"></a>

```csharp
public string TrainingTaskDefinition { get; }
```

- *Type:* string

---

##### `TrainingTaskInputs`<sup>Required</sup> <a name="TrainingTaskInputs" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputs"></a>

```csharp
public string TrainingTaskInputs { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiTrainingPipelineConfig <a name="GoogleVertexAiTrainingPipelineConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string ModelId,
    string TrainingTaskDefinition,
    string TrainingTaskInputs,
    string DeletionPolicy = null,
    GoogleVertexAiTrainingPipelineEncryptionSpec EncryptionSpec = null,
    string Id = null,
    GoogleVertexAiTrainingPipelineInputDataConfig InputDataConfig = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleVertexAiTrainingPipelineModelToUpload ModelToUpload = null,
    string ParentModel = null,
    string Project = null,
    string Region = null,
    GoogleVertexAiTrainingPipelineTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user-defined name of this TrainingPipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelId">ModelId</a></code> | <code>string</code> | The ID to use for the uploaded Model, which will become the final component of the model resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskDefinition">TrainingTaskDefinition</a></code> | <code>string</code> | A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskInputs">TrainingTaskInputs</a></code> | <code>string</code> | The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#id GoogleVertexAiTrainingPipeline#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize TrainingPipelines. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelToUpload">ModelToUpload</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a></code> | model_to_upload block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.parentModel">ParentModel</a></code> | <code>string</code> | When specified, the model_to_upload will become a new version of this parent_model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#project GoogleVertexAiTrainingPipeline#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.region">Region</a></code> | <code>string</code> | The region of the training pipeline. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-defined name of this TrainingPipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#display_name GoogleVertexAiTrainingPipeline#display_name}

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelId"></a>

```csharp
public string ModelId { get; set; }
```

- *Type:* string

The ID to use for the uploaded Model, which will become the final component of the model resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#model_id GoogleVertexAiTrainingPipeline#model_id}

---

##### `TrainingTaskDefinition`<sup>Required</sup> <a name="TrainingTaskDefinition" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskDefinition"></a>

```csharp
public string TrainingTaskDefinition { get; set; }
```

- *Type:* string

A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work.

The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_task_definition GoogleVertexAiTrainingPipeline#training_task_definition}

---

##### `TrainingTaskInputs`<sup>Required</sup> <a name="TrainingTaskInputs" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskInputs"></a>

```csharp
public string TrainingTaskInputs { get; set; }
```

- *Type:* string

The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_task_inputs GoogleVertexAiTrainingPipeline#training_task_inputs}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#deletion_policy GoogleVertexAiTrainingPipeline#deletion_policy}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiTrainingPipelineEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#encryption_spec GoogleVertexAiTrainingPipeline#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#id GoogleVertexAiTrainingPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputDataConfig`<sup>Optional</sup> <a name="InputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.inputDataConfig"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfig InputDataConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#input_data_config GoogleVertexAiTrainingPipeline#input_data_config}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels with user-defined metadata to organize TrainingPipelines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#labels GoogleVertexAiTrainingPipeline#labels}

---

##### `ModelToUpload`<sup>Optional</sup> <a name="ModelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelToUpload"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUpload ModelToUpload { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

model_to_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#model_to_upload GoogleVertexAiTrainingPipeline#model_to_upload}

---

##### `ParentModel`<sup>Optional</sup> <a name="ParentModel" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.parentModel"></a>

```csharp
public string ParentModel { get; set; }
```

- *Type:* string

When specified, the model_to_upload will become a new version of this parent_model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#parent_model GoogleVertexAiTrainingPipeline#parent_model}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#project GoogleVertexAiTrainingPipeline#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the training pipeline. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#region GoogleVertexAiTrainingPipeline#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.timeouts"></a>

```csharp
public GoogleVertexAiTrainingPipelineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeouts GoogleVertexAiTrainingPipeline#timeouts}

---

### GoogleVertexAiTrainingPipelineEncryptionSpec <a name="GoogleVertexAiTrainingPipelineEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#kms_key_name GoogleVertexAiTrainingPipeline#kms_key_name}

---

### GoogleVertexAiTrainingPipelineError <a name="GoogleVertexAiTrainingPipelineError" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineError {

};
```


### GoogleVertexAiTrainingPipelineInputDataConfig <a name="GoogleVertexAiTrainingPipelineInputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfig {
    string DatasetId,
    string AnnotationSchemaUri = null,
    string AnnotationsFilter = null,
    GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination BigqueryDestination = null,
    GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit FilterSplit = null,
    GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit FractionSplit = null,
    GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination GcsDestination = null,
    bool|IResolvable PersistMlUseAssignment = null,
    GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit PredefinedSplit = null,
    string SavedQueryId = null,
    GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit StratifiedSplit = null,
    GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit TimestampSplit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.datasetId">DatasetId</a></code> | <code>string</code> | The ID of the Dataset in the same Project and Location which data will be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationSchemaUri">AnnotationSchemaUri</a></code> | <code>string</code> | Applicable only to custom training with Datasets that have DataItems and Annotations. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationsFilter">AnnotationsFilter</a></code> | <code>string</code> | Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.bigqueryDestination">BigqueryDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | bigquery_destination block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.filterSplit">FilterSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | filter_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.fractionSplit">FractionSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | fraction_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.gcsDestination">GcsDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | gcs_destination block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.persistMlUseAssignment">PersistMlUseAssignment</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to persist the ML use assignment to data item system labels. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.predefinedSplit">PredefinedSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | predefined_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.savedQueryId">SavedQueryId</a></code> | <code>string</code> | Only applicable to Datasets that have SavedQueries. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.stratifiedSplit">StratifiedSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | stratified_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.timestampSplit">TimestampSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | timestamp_split block. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The ID of the Dataset in the same Project and Location which data will be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#dataset_id GoogleVertexAiTrainingPipeline#dataset_id}

---

##### `AnnotationSchemaUri`<sup>Optional</sup> <a name="AnnotationSchemaUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationSchemaUri"></a>

```csharp
public string AnnotationSchemaUri { get; set; }
```

- *Type:* string

Applicable only to custom training with Datasets that have DataItems and Annotations.

Cloud Storage URI that points to a YAML file describing the annotation schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#annotation_schema_uri GoogleVertexAiTrainingPipeline#annotation_schema_uri}

---

##### `AnnotationsFilter`<sup>Optional</sup> <a name="AnnotationsFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationsFilter"></a>

```csharp
public string AnnotationsFilter { get; set; }
```

- *Type:* string

Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#annotations_filter GoogleVertexAiTrainingPipeline#annotations_filter}

---

##### `BigqueryDestination`<sup>Optional</sup> <a name="BigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.bigqueryDestination"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination BigqueryDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#bigquery_destination GoogleVertexAiTrainingPipeline#bigquery_destination}

---

##### `FilterSplit`<sup>Optional</sup> <a name="FilterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.filterSplit"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit FilterSplit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

filter_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#filter_split GoogleVertexAiTrainingPipeline#filter_split}

---

##### `FractionSplit`<sup>Optional</sup> <a name="FractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.fractionSplit"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit FractionSplit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

fraction_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#fraction_split GoogleVertexAiTrainingPipeline#fraction_split}

---

##### `GcsDestination`<sup>Optional</sup> <a name="GcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.gcsDestination"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination GcsDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#gcs_destination GoogleVertexAiTrainingPipeline#gcs_destination}

---

##### `PersistMlUseAssignment`<sup>Optional</sup> <a name="PersistMlUseAssignment" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.persistMlUseAssignment"></a>

```csharp
public bool|IResolvable PersistMlUseAssignment { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to persist the ML use assignment to data item system labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#persist_ml_use_assignment GoogleVertexAiTrainingPipeline#persist_ml_use_assignment}

---

##### `PredefinedSplit`<sup>Optional</sup> <a name="PredefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.predefinedSplit"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit PredefinedSplit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

predefined_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#predefined_split GoogleVertexAiTrainingPipeline#predefined_split}

---

##### `SavedQueryId`<sup>Optional</sup> <a name="SavedQueryId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.savedQueryId"></a>

```csharp
public string SavedQueryId { get; set; }
```

- *Type:* string

Only applicable to Datasets that have SavedQueries.

The ID of a SavedQuery under the Dataset specified by dataset_id used for filtering Annotations for training.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#saved_query_id GoogleVertexAiTrainingPipeline#saved_query_id}

---

##### `StratifiedSplit`<sup>Optional</sup> <a name="StratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.stratifiedSplit"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit StratifiedSplit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

stratified_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#stratified_split GoogleVertexAiTrainingPipeline#stratified_split}

---

##### `TimestampSplit`<sup>Optional</sup> <a name="TimestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.timestampSplit"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit TimestampSplit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

timestamp_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timestamp_split GoogleVertexAiTrainingPipeline#timestamp_split}

---

### GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination <a name="GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination {
    string OutputUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination.property.outputUri">OutputUri</a></code> | <code>string</code> | The BigQuery table to which the output is to be written. |

---

##### `OutputUri`<sup>Required</sup> <a name="OutputUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination.property.outputUri"></a>

```csharp
public string OutputUri { get; set; }
```

- *Type:* string

The BigQuery table to which the output is to be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#output_uri GoogleVertexAiTrainingPipeline#output_uri}

---

### GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit {
    string TestFilter,
    string TrainingFilter,
    string ValidationFilter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.testFilter">TestFilter</a></code> | <code>string</code> | A filter on DataItems of the Dataset for test set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.trainingFilter">TrainingFilter</a></code> | <code>string</code> | A filter on DataItems of the Dataset for training set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.validationFilter">ValidationFilter</a></code> | <code>string</code> | A filter on DataItems of the Dataset for validation set. |

---

##### `TestFilter`<sup>Required</sup> <a name="TestFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.testFilter"></a>

```csharp
public string TestFilter { get; set; }
```

- *Type:* string

A filter on DataItems of the Dataset for test set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_filter GoogleVertexAiTrainingPipeline#test_filter}

---

##### `TrainingFilter`<sup>Required</sup> <a name="TrainingFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.trainingFilter"></a>

```csharp
public string TrainingFilter { get; set; }
```

- *Type:* string

A filter on DataItems of the Dataset for training set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_filter GoogleVertexAiTrainingPipeline#training_filter}

---

##### `ValidationFilter`<sup>Required</sup> <a name="ValidationFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.validationFilter"></a>

```csharp
public string ValidationFilter { get; set; }
```

- *Type:* string

A filter on DataItems of the Dataset for validation set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_filter GoogleVertexAiTrainingPipeline#validation_filter}

---

### GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit {
    double TestFraction = null,
    double TrainingFraction = null,
    double ValidationFraction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.testFraction">TestFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.trainingFraction">TrainingFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.validationFraction">ValidationFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `TestFraction`<sup>Optional</sup> <a name="TestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.testFraction"></a>

```csharp
public double TestFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_fraction GoogleVertexAiTrainingPipeline#test_fraction}

---

##### `TrainingFraction`<sup>Optional</sup> <a name="TrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.trainingFraction"></a>

```csharp
public double TrainingFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_fraction GoogleVertexAiTrainingPipeline#training_fraction}

---

##### `ValidationFraction`<sup>Optional</sup> <a name="ValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.validationFraction"></a>

```csharp
public double ValidationFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_fraction GoogleVertexAiTrainingPipeline#validation_fraction}

---

### GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination <a name="GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination {
    string OutputUriPrefix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination.property.outputUriPrefix">OutputUriPrefix</a></code> | <code>string</code> | The Cloud Storage URI prefix to write to. |

---

##### `OutputUriPrefix`<sup>Required</sup> <a name="OutputUriPrefix" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination.property.outputUriPrefix"></a>

```csharp
public string OutputUriPrefix { get; set; }
```

- *Type:* string

The Cloud Storage URI prefix to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#output_uri_prefix GoogleVertexAiTrainingPipeline#output_uri_prefix}

---

### GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit {
    string Key
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit.property.key">Key</a></code> | <code>string</code> | The key is a name of one of the Dataset's data columns. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#key GoogleVertexAiTrainingPipeline#key}

---

### GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit {
    string Key,
    double TestFraction = null,
    double TrainingFraction = null,
    double ValidationFraction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.key">Key</a></code> | <code>string</code> | The key is a name of one of the Dataset's data columns. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.testFraction">TestFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.trainingFraction">TrainingFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.validationFraction">ValidationFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#key GoogleVertexAiTrainingPipeline#key}

---

##### `TestFraction`<sup>Optional</sup> <a name="TestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.testFraction"></a>

```csharp
public double TestFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_fraction GoogleVertexAiTrainingPipeline#test_fraction}

---

##### `TrainingFraction`<sup>Optional</sup> <a name="TrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.trainingFraction"></a>

```csharp
public double TrainingFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_fraction GoogleVertexAiTrainingPipeline#training_fraction}

---

##### `ValidationFraction`<sup>Optional</sup> <a name="ValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.validationFraction"></a>

```csharp
public double ValidationFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_fraction GoogleVertexAiTrainingPipeline#validation_fraction}

---

### GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit {
    string Key,
    double TestFraction = null,
    double TrainingFraction = null,
    double ValidationFraction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.key">Key</a></code> | <code>string</code> | The key is a name of one of the Dataset's data columns. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.testFraction">TestFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.trainingFraction">TrainingFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.validationFraction">ValidationFraction</a></code> | <code>double</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#key GoogleVertexAiTrainingPipeline#key}

---

##### `TestFraction`<sup>Optional</sup> <a name="TestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.testFraction"></a>

```csharp
public double TestFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_fraction GoogleVertexAiTrainingPipeline#test_fraction}

---

##### `TrainingFraction`<sup>Optional</sup> <a name="TrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.trainingFraction"></a>

```csharp
public double TrainingFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_fraction GoogleVertexAiTrainingPipeline#training_fraction}

---

##### `ValidationFraction`<sup>Optional</sup> <a name="ValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.validationFraction"></a>

```csharp
public double ValidationFraction { get; set; }
```

- *Type:* double

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_fraction GoogleVertexAiTrainingPipeline#validation_fraction}

---

### GoogleVertexAiTrainingPipelineModelToUpload <a name="GoogleVertexAiTrainingPipelineModelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUpload {
    string DisplayName,
    string ArtifactUri = null,
    GoogleVertexAiTrainingPipelineModelToUploadContainerSpec ContainerSpec = null,
    string Description = null,
    GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec EncryptionSpec = null,
    GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec ExplanationSpec = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string[] VersionAliases = null,
    string VersionDescription = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.displayName">DisplayName</a></code> | <code>string</code> | The user-defined name of the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.artifactUri">ArtifactUri</a></code> | <code>string</code> | The path to the directory containing the Model artifact and any of its supporting files. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.containerSpec">ContainerSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.description">Description</a></code> | <code>string</code> | The description of the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.explanationSpec">ExplanationSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | explanation_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize your Models. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionAliases">VersionAliases</a></code> | <code>string[]</code> | User provided version aliases so that a model version can be referenced using alias. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionDescription">VersionDescription</a></code> | <code>string</code> | The description of this version. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-defined name of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#display_name GoogleVertexAiTrainingPipeline#display_name}

---

##### `ArtifactUri`<sup>Optional</sup> <a name="ArtifactUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.artifactUri"></a>

```csharp
public string ArtifactUri { get; set; }
```

- *Type:* string

The path to the directory containing the Model artifact and any of its supporting files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#artifact_uri GoogleVertexAiTrainingPipeline#artifact_uri}

---

##### `ContainerSpec`<sup>Optional</sup> <a name="ContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.containerSpec"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpec ContainerSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#container_spec GoogleVertexAiTrainingPipeline#container_spec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#description GoogleVertexAiTrainingPipeline#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#encryption_spec GoogleVertexAiTrainingPipeline#encryption_spec}

---

##### `ExplanationSpec`<sup>Optional</sup> <a name="ExplanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.explanationSpec"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec ExplanationSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

explanation_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#explanation_spec GoogleVertexAiTrainingPipeline#explanation_spec}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels with user-defined metadata to organize your Models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#labels GoogleVertexAiTrainingPipeline#labels}

---

##### `VersionAliases`<sup>Optional</sup> <a name="VersionAliases" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionAliases"></a>

```csharp
public string[] VersionAliases { get; set; }
```

- *Type:* string[]

User provided version aliases so that a model version can be referenced using alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#version_aliases GoogleVertexAiTrainingPipeline#version_aliases}

---

##### `VersionDescription`<sup>Optional</sup> <a name="VersionDescription" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionDescription"></a>

```csharp
public string VersionDescription { get; set; }
```

- *Type:* string

The description of this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#version_description GoogleVertexAiTrainingPipeline#version_description}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpec <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpec {
    string ImageUri,
    string[] Args = null,
    string[] Command = null,
    string DeploymentTimeout = null,
    IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv[] Env = null,
    IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts[] GrpcPorts = null,
    GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe HealthProbe = null,
    string HealthRoute = null,
    IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts[] Ports = null,
    string PredictRoute = null,
    string SharedMemorySizeMb = null,
    GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe StartupProbe = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.imageUri">ImageUri</a></code> | <code>string</code> | URI of the Docker image to be used as the custom container for serving predictions. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.args">Args</a></code> | <code>string[]</code> | Specifies the arguments to the command when the container starts. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.command">Command</a></code> | <code>string[]</code> | Specifies the command that runs when the container starts. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.deploymentTimeout">DeploymentTimeout</a></code> | <code>string</code> | Deployment timeout. Limit for deployment timeout is 2 hours. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.env">Env</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>[]</code> | env block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.grpcPorts">GrpcPorts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>[]</code> | grpc_ports block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthProbe">HealthProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | health_probe block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthRoute">HealthRoute</a></code> | <code>string</code> | HTTP path on the container to send health checks to. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.ports">Ports</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>[]</code> | ports block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.predictRoute">PredictRoute</a></code> | <code>string</code> | HTTP path on the container to send prediction requests to. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.sharedMemorySizeMb">SharedMemorySizeMb</a></code> | <code>string</code> | The amount of the VM memory to reserve as the shared memory for the model in megabytes. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | startup_probe block. |

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

URI of the Docker image to be used as the custom container for serving predictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#image_uri GoogleVertexAiTrainingPipeline#image_uri}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Specifies the arguments to the command when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#args GoogleVertexAiTrainingPipeline#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Specifies the command that runs when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#command GoogleVertexAiTrainingPipeline#command}

---

##### `DeploymentTimeout`<sup>Optional</sup> <a name="DeploymentTimeout" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.deploymentTimeout"></a>

```csharp
public string DeploymentTimeout { get; set; }
```

- *Type:* string

Deployment timeout. Limit for deployment timeout is 2 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#deployment_timeout GoogleVertexAiTrainingPipeline#deployment_timeout}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.env"></a>

```csharp
public IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv[] Env { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#env GoogleVertexAiTrainingPipeline#env}

---

##### `GrpcPorts`<sup>Optional</sup> <a name="GrpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.grpcPorts"></a>

```csharp
public IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts[] GrpcPorts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>[]

grpc_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#grpc_ports GoogleVertexAiTrainingPipeline#grpc_ports}

---

##### `HealthProbe`<sup>Optional</sup> <a name="HealthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthProbe"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe HealthProbe { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#health_probe GoogleVertexAiTrainingPipeline#health_probe}

---

##### `HealthRoute`<sup>Optional</sup> <a name="HealthRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthRoute"></a>

```csharp
public string HealthRoute { get; set; }
```

- *Type:* string

HTTP path on the container to send health checks to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#health_route GoogleVertexAiTrainingPipeline#health_route}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.ports"></a>

```csharp
public IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts[] Ports { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#ports GoogleVertexAiTrainingPipeline#ports}

---

##### `PredictRoute`<sup>Optional</sup> <a name="PredictRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.predictRoute"></a>

```csharp
public string PredictRoute { get; set; }
```

- *Type:* string

HTTP path on the container to send prediction requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#predict_route GoogleVertexAiTrainingPipeline#predict_route}

---

##### `SharedMemorySizeMb`<sup>Optional</sup> <a name="SharedMemorySizeMb" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.sharedMemorySizeMb"></a>

```csharp
public string SharedMemorySizeMb { get; set; }
```

- *Type:* string

The amount of the VM memory to reserve as the shared memory for the model in megabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#shared_memory_size_mb GoogleVertexAiTrainingPipeline#shared_memory_size_mb}

---

##### `StartupProbe`<sup>Optional</sup> <a name="StartupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.startupProbe"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe StartupProbe { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#startup_probe GoogleVertexAiTrainingPipeline#startup_probe}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.name">Name</a></code> | <code>string</code> | The name of the environment variable. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.value">Value</a></code> | <code>string</code> | The value of the environment variable. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#name GoogleVertexAiTrainingPipeline#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#value GoogleVertexAiTrainingPipeline#value}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts {
    double ContainerPort
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.property.containerPort">ContainerPort</a></code> | <code>double</code> | The number of the port on the container. |

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.property.containerPort"></a>

```csharp
public double ContainerPort { get; set; }
```

- *Type:* double

The number of the port on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#container_port GoogleVertexAiTrainingPipeline#container_port}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe {
    GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec Exec = null,
    double PeriodSeconds = null,
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.exec">Exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | exec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | Number of seconds after which the probe times out. |

---

##### `Exec`<sup>Optional</sup> <a name="Exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.exec"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec Exec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#exec GoogleVertexAiTrainingPipeline#exec}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; set; }
```

- *Type:* double

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#period_seconds GoogleVertexAiTrainingPipeline#period_seconds}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeout_seconds GoogleVertexAiTrainingPipeline#timeout_seconds}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec {
    string[] Command = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.property.command">Command</a></code> | <code>string[]</code> | Command is the command line to execute inside the container. |

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#command GoogleVertexAiTrainingPipeline#command}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts {
    double ContainerPort
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts.property.containerPort">ContainerPort</a></code> | <code>double</code> | The number of the port on the container. |

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts.property.containerPort"></a>

```csharp
public double ContainerPort { get; set; }
```

- *Type:* double

The number of the port on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#container_port GoogleVertexAiTrainingPipeline#container_port}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe {
    GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec Exec = null,
    double PeriodSeconds = null,
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.exec">Exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | exec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | Number of seconds after which the probe times out. |

---

##### `Exec`<sup>Optional</sup> <a name="Exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.exec"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec Exec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#exec GoogleVertexAiTrainingPipeline#exec}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; set; }
```

- *Type:* double

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#period_seconds GoogleVertexAiTrainingPipeline#period_seconds}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeout_seconds GoogleVertexAiTrainingPipeline#timeout_seconds}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec {
    string[] Command = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.property.command">Command</a></code> | <code>string[]</code> | Command is the command line to execute inside the container. |

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#command GoogleVertexAiTrainingPipeline#command}

---

### GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec <a name="GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#kms_key_name GoogleVertexAiTrainingPipeline#kms_key_name}

---

### GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec <a name="GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec {
    string Metadata = null,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.metadata">Metadata</a></code> | <code>string</code> | Metadata describing the Model's input and output for explanation. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.parameters">Parameters</a></code> | <code>string</code> | Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string. |

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

Metadata describing the Model's input and output for explanation. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#metadata GoogleVertexAiTrainingPipeline#metadata}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#parameters GoogleVertexAiTrainingPipeline#parameters}

---

### GoogleVertexAiTrainingPipelineTimeouts <a name="GoogleVertexAiTrainingPipelineTimeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#create GoogleVertexAiTrainingPipeline#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#delete GoogleVertexAiTrainingPipeline#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#update GoogleVertexAiTrainingPipeline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#create GoogleVertexAiTrainingPipeline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#delete GoogleVertexAiTrainingPipeline#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#update GoogleVertexAiTrainingPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference <a name="GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

---


### GoogleVertexAiTrainingPipelineErrorList <a name="GoogleVertexAiTrainingPipelineErrorList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.get"></a>

```csharp
private GoogleVertexAiTrainingPipelineErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiTrainingPipelineErrorOutputReference <a name="GoogleVertexAiTrainingPipelineErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError">GoogleVertexAiTrainingPipelineError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError">GoogleVertexAiTrainingPipelineError</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUriInput">OutputUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUri">OutputUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputUriInput`<sup>Optional</sup> <a name="OutputUriInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUriInput"></a>

```csharp
public string OutputUriInput { get; }
```

- *Type:* string

---

##### `OutputUri`<sup>Required</sup> <a name="OutputUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUri"></a>

```csharp
public string OutputUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilterInput">TestFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilterInput">TrainingFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilterInput">ValidationFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilter">TestFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilter">TrainingFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilter">ValidationFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TestFilterInput`<sup>Optional</sup> <a name="TestFilterInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilterInput"></a>

```csharp
public string TestFilterInput { get; }
```

- *Type:* string

---

##### `TrainingFilterInput`<sup>Optional</sup> <a name="TrainingFilterInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilterInput"></a>

```csharp
public string TrainingFilterInput { get; }
```

- *Type:* string

---

##### `ValidationFilterInput`<sup>Optional</sup> <a name="ValidationFilterInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilterInput"></a>

```csharp
public string ValidationFilterInput { get; }
```

- *Type:* string

---

##### `TestFilter`<sup>Required</sup> <a name="TestFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilter"></a>

```csharp
public string TestFilter { get; }
```

- *Type:* string

---

##### `TrainingFilter`<sup>Required</sup> <a name="TrainingFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilter"></a>

```csharp
public string TrainingFilter { get; }
```

- *Type:* string

---

##### `ValidationFilter`<sup>Required</sup> <a name="ValidationFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilter"></a>

```csharp
public string ValidationFilter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTestFraction">ResetTestFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTrainingFraction">ResetTrainingFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetValidationFraction">ResetValidationFraction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTestFraction` <a name="ResetTestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTestFraction"></a>

```csharp
private void ResetTestFraction()
```

##### `ResetTrainingFraction` <a name="ResetTrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTrainingFraction"></a>

```csharp
private void ResetTrainingFraction()
```

##### `ResetValidationFraction` <a name="ResetValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetValidationFraction"></a>

```csharp
private void ResetValidationFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFractionInput">TestFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFractionInput">TrainingFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFractionInput">ValidationFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFraction">TestFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFraction">TrainingFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFraction">ValidationFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TestFractionInput`<sup>Optional</sup> <a name="TestFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFractionInput"></a>

```csharp
public double TestFractionInput { get; }
```

- *Type:* double

---

##### `TrainingFractionInput`<sup>Optional</sup> <a name="TrainingFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFractionInput"></a>

```csharp
public double TrainingFractionInput { get; }
```

- *Type:* double

---

##### `ValidationFractionInput`<sup>Optional</sup> <a name="ValidationFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFractionInput"></a>

```csharp
public double ValidationFractionInput { get; }
```

- *Type:* double

---

##### `TestFraction`<sup>Required</sup> <a name="TestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFraction"></a>

```csharp
public double TestFraction { get; }
```

- *Type:* double

---

##### `TrainingFraction`<sup>Required</sup> <a name="TrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFraction"></a>

```csharp
public double TrainingFraction { get; }
```

- *Type:* double

---

##### `ValidationFraction`<sup>Required</sup> <a name="ValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFraction"></a>

```csharp
public double ValidationFraction { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefixInput">OutputUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefix">OutputUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputUriPrefixInput`<sup>Optional</sup> <a name="OutputUriPrefixInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefixInput"></a>

```csharp
public string OutputUriPrefixInput { get; }
```

- *Type:* string

---

##### `OutputUriPrefix`<sup>Required</sup> <a name="OutputUriPrefix" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefix"></a>

```csharp
public string OutputUriPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination">PutBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit">PutFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit">PutFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination">PutGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit">PutPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit">PutStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit">PutTimestampSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationSchemaUri">ResetAnnotationSchemaUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationsFilter">ResetAnnotationsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetBigqueryDestination">ResetBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFilterSplit">ResetFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFractionSplit">ResetFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetGcsDestination">ResetGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPersistMlUseAssignment">ResetPersistMlUseAssignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPredefinedSplit">ResetPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetSavedQueryId">ResetSavedQueryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetStratifiedSplit">ResetStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetTimestampSplit">ResetTimestampSplit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBigqueryDestination` <a name="PutBigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination"></a>

```csharp
private void PutBigqueryDestination(GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---

##### `PutFilterSplit` <a name="PutFilterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit"></a>

```csharp
private void PutFilterSplit(GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---

##### `PutFractionSplit` <a name="PutFractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit"></a>

```csharp
private void PutFractionSplit(GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---

##### `PutGcsDestination` <a name="PutGcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination"></a>

```csharp
private void PutGcsDestination(GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---

##### `PutPredefinedSplit` <a name="PutPredefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit"></a>

```csharp
private void PutPredefinedSplit(GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---

##### `PutStratifiedSplit` <a name="PutStratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit"></a>

```csharp
private void PutStratifiedSplit(GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---

##### `PutTimestampSplit` <a name="PutTimestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit"></a>

```csharp
private void PutTimestampSplit(GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---

##### `ResetAnnotationSchemaUri` <a name="ResetAnnotationSchemaUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationSchemaUri"></a>

```csharp
private void ResetAnnotationSchemaUri()
```

##### `ResetAnnotationsFilter` <a name="ResetAnnotationsFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationsFilter"></a>

```csharp
private void ResetAnnotationsFilter()
```

##### `ResetBigqueryDestination` <a name="ResetBigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetBigqueryDestination"></a>

```csharp
private void ResetBigqueryDestination()
```

##### `ResetFilterSplit` <a name="ResetFilterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFilterSplit"></a>

```csharp
private void ResetFilterSplit()
```

##### `ResetFractionSplit` <a name="ResetFractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFractionSplit"></a>

```csharp
private void ResetFractionSplit()
```

##### `ResetGcsDestination` <a name="ResetGcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetGcsDestination"></a>

```csharp
private void ResetGcsDestination()
```

##### `ResetPersistMlUseAssignment` <a name="ResetPersistMlUseAssignment" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPersistMlUseAssignment"></a>

```csharp
private void ResetPersistMlUseAssignment()
```

##### `ResetPredefinedSplit` <a name="ResetPredefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPredefinedSplit"></a>

```csharp
private void ResetPredefinedSplit()
```

##### `ResetSavedQueryId` <a name="ResetSavedQueryId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetSavedQueryId"></a>

```csharp
private void ResetSavedQueryId()
```

##### `ResetStratifiedSplit` <a name="ResetStratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetStratifiedSplit"></a>

```csharp
private void ResetStratifiedSplit()
```

##### `ResetTimestampSplit` <a name="ResetTimestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetTimestampSplit"></a>

```csharp
private void ResetTimestampSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestination">BigqueryDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplit">FilterSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplit">FractionSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestination">GcsDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplit">PredefinedSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplit">StratifiedSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplit">TimestampSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUriInput">AnnotationSchemaUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilterInput">AnnotationsFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestinationInput">BigqueryDestinationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplitInput">FilterSplitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplitInput">FractionSplitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestinationInput">GcsDestinationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignmentInput">PersistMlUseAssignmentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplitInput">PredefinedSplitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryIdInput">SavedQueryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplitInput">StratifiedSplitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplitInput">TimestampSplitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUri">AnnotationSchemaUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilter">AnnotationsFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignment">PersistMlUseAssignment</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryId">SavedQueryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BigqueryDestination`<sup>Required</sup> <a name="BigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestination"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference BigqueryDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference</a>

---

##### `FilterSplit`<sup>Required</sup> <a name="FilterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplit"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference FilterSplit { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference</a>

---

##### `FractionSplit`<sup>Required</sup> <a name="FractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplit"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference FractionSplit { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference</a>

---

##### `GcsDestination`<sup>Required</sup> <a name="GcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestination"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference GcsDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference</a>

---

##### `PredefinedSplit`<sup>Required</sup> <a name="PredefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplit"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference PredefinedSplit { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference</a>

---

##### `StratifiedSplit`<sup>Required</sup> <a name="StratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplit"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference StratifiedSplit { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference</a>

---

##### `TimestampSplit`<sup>Required</sup> <a name="TimestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplit"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference TimestampSplit { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference</a>

---

##### `AnnotationSchemaUriInput`<sup>Optional</sup> <a name="AnnotationSchemaUriInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUriInput"></a>

```csharp
public string AnnotationSchemaUriInput { get; }
```

- *Type:* string

---

##### `AnnotationsFilterInput`<sup>Optional</sup> <a name="AnnotationsFilterInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilterInput"></a>

```csharp
public string AnnotationsFilterInput { get; }
```

- *Type:* string

---

##### `BigqueryDestinationInput`<sup>Optional</sup> <a name="BigqueryDestinationInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestinationInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination BigqueryDestinationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `FilterSplitInput`<sup>Optional</sup> <a name="FilterSplitInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplitInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit FilterSplitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---

##### `FractionSplitInput`<sup>Optional</sup> <a name="FractionSplitInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplitInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit FractionSplitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---

##### `GcsDestinationInput`<sup>Optional</sup> <a name="GcsDestinationInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestinationInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination GcsDestinationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---

##### `PersistMlUseAssignmentInput`<sup>Optional</sup> <a name="PersistMlUseAssignmentInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignmentInput"></a>

```csharp
public bool|IResolvable PersistMlUseAssignmentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PredefinedSplitInput`<sup>Optional</sup> <a name="PredefinedSplitInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplitInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit PredefinedSplitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---

##### `SavedQueryIdInput`<sup>Optional</sup> <a name="SavedQueryIdInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryIdInput"></a>

```csharp
public string SavedQueryIdInput { get; }
```

- *Type:* string

---

##### `StratifiedSplitInput`<sup>Optional</sup> <a name="StratifiedSplitInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplitInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit StratifiedSplitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---

##### `TimestampSplitInput`<sup>Optional</sup> <a name="TimestampSplitInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplitInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit TimestampSplitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---

##### `AnnotationSchemaUri`<sup>Required</sup> <a name="AnnotationSchemaUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUri"></a>

```csharp
public string AnnotationSchemaUri { get; }
```

- *Type:* string

---

##### `AnnotationsFilter`<sup>Required</sup> <a name="AnnotationsFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilter"></a>

```csharp
public string AnnotationsFilter { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `PersistMlUseAssignment`<sup>Required</sup> <a name="PersistMlUseAssignment" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignment"></a>

```csharp
public bool|IResolvable PersistMlUseAssignment { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SavedQueryId`<sup>Required</sup> <a name="SavedQueryId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryId"></a>

```csharp
public string SavedQueryId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTestFraction">ResetTestFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTrainingFraction">ResetTrainingFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetValidationFraction">ResetValidationFraction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTestFraction` <a name="ResetTestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTestFraction"></a>

```csharp
private void ResetTestFraction()
```

##### `ResetTrainingFraction` <a name="ResetTrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTrainingFraction"></a>

```csharp
private void ResetTrainingFraction()
```

##### `ResetValidationFraction` <a name="ResetValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetValidationFraction"></a>

```csharp
private void ResetValidationFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFractionInput">TestFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFractionInput">TrainingFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFractionInput">ValidationFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFraction">TestFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFraction">TrainingFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFraction">ValidationFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TestFractionInput`<sup>Optional</sup> <a name="TestFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFractionInput"></a>

```csharp
public double TestFractionInput { get; }
```

- *Type:* double

---

##### `TrainingFractionInput`<sup>Optional</sup> <a name="TrainingFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFractionInput"></a>

```csharp
public double TrainingFractionInput { get; }
```

- *Type:* double

---

##### `ValidationFractionInput`<sup>Optional</sup> <a name="ValidationFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFractionInput"></a>

```csharp
public double ValidationFractionInput { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `TestFraction`<sup>Required</sup> <a name="TestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFraction"></a>

```csharp
public double TestFraction { get; }
```

- *Type:* double

---

##### `TrainingFraction`<sup>Required</sup> <a name="TrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFraction"></a>

```csharp
public double TrainingFraction { get; }
```

- *Type:* double

---

##### `ValidationFraction`<sup>Required</sup> <a name="ValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFraction"></a>

```csharp
public double ValidationFraction { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTestFraction">ResetTestFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTrainingFraction">ResetTrainingFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetValidationFraction">ResetValidationFraction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTestFraction` <a name="ResetTestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTestFraction"></a>

```csharp
private void ResetTestFraction()
```

##### `ResetTrainingFraction` <a name="ResetTrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTrainingFraction"></a>

```csharp
private void ResetTrainingFraction()
```

##### `ResetValidationFraction` <a name="ResetValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetValidationFraction"></a>

```csharp
private void ResetValidationFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFractionInput">TestFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFractionInput">TrainingFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFractionInput">ValidationFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFraction">TestFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFraction">TrainingFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFraction">ValidationFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TestFractionInput`<sup>Optional</sup> <a name="TestFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFractionInput"></a>

```csharp
public double TestFractionInput { get; }
```

- *Type:* double

---

##### `TrainingFractionInput`<sup>Optional</sup> <a name="TrainingFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFractionInput"></a>

```csharp
public double TrainingFractionInput { get; }
```

- *Type:* double

---

##### `ValidationFractionInput`<sup>Optional</sup> <a name="ValidationFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFractionInput"></a>

```csharp
public double ValidationFractionInput { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `TestFraction`<sup>Required</sup> <a name="TestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFraction"></a>

```csharp
public double TestFraction { get; }
```

- *Type:* double

---

##### `TrainingFraction`<sup>Required</sup> <a name="TrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFraction"></a>

```csharp
public double TrainingFraction { get; }
```

- *Type:* double

---

##### `ValidationFraction`<sup>Required</sup> <a name="ValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFraction"></a>

```csharp
public double ValidationFraction { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get"></a>

```csharp
private GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>[]

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get"></a>

```csharp
private GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>[]

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPort">ContainerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPortInput"></a>

```csharp
public double ContainerPortInput { get; }
```

- *Type:* double

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPort"></a>

```csharp
public double ContainerPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec">PutExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetExec">ResetExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExec` <a name="PutExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec"></a>

```csharp
private void PutExec(GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---

##### `ResetExec` <a name="ResetExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetExec"></a>

```csharp
private void ResetExec()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetPeriodSeconds"></a>

```csharp
private void ResetPeriodSeconds()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.exec">Exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.execInput">ExecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exec`<sup>Required</sup> <a name="Exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.exec"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference Exec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference</a>

---

##### `ExecInput`<sup>Optional</sup> <a name="ExecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.execInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec ExecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSecondsInput"></a>

```csharp
public double PeriodSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; }
```

- *Type:* double

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts">PutGrpcPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe">PutHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe">PutStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetDeploymentTimeout">ResetDeploymentTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetGrpcPorts">ResetGrpcPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthProbe">ResetHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthRoute">ResetHealthRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPredictRoute">ResetPredictRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetSharedMemorySizeMb">ResetSharedMemorySizeMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetStartupProbe">ResetStartupProbe</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv"></a>

```csharp
private void PutEnv(IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>[]

---

##### `PutGrpcPorts` <a name="PutGrpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts"></a>

```csharp
private void PutGrpcPorts(IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>[]

---

##### `PutHealthProbe` <a name="PutHealthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe"></a>

```csharp
private void PutHealthProbe(GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---

##### `PutPorts` <a name="PutPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts"></a>

```csharp
private void PutPorts(IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>[]

---

##### `PutStartupProbe` <a name="PutStartupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe"></a>

```csharp
private void PutStartupProbe(GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetDeploymentTimeout` <a name="ResetDeploymentTimeout" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetDeploymentTimeout"></a>

```csharp
private void ResetDeploymentTimeout()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetGrpcPorts` <a name="ResetGrpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetGrpcPorts"></a>

```csharp
private void ResetGrpcPorts()
```

##### `ResetHealthProbe` <a name="ResetHealthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthProbe"></a>

```csharp
private void ResetHealthProbe()
```

##### `ResetHealthRoute` <a name="ResetHealthRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthRoute"></a>

```csharp
private void ResetHealthRoute()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```

##### `ResetPredictRoute` <a name="ResetPredictRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPredictRoute"></a>

```csharp
private void ResetPredictRoute()
```

##### `ResetSharedMemorySizeMb` <a name="ResetSharedMemorySizeMb" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetSharedMemorySizeMb"></a>

```csharp
private void ResetSharedMemorySizeMb()
```

##### `ResetStartupProbe` <a name="ResetStartupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetStartupProbe"></a>

```csharp
private void ResetStartupProbe()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.env">Env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPorts">GrpcPorts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbe">HealthProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeoutInput">DeploymentTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.envInput">EnvInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPortsInput">GrpcPortsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbeInput">HealthProbeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRouteInput">HealthRouteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.portsInput">PortsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRouteInput">PredictRouteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMbInput">SharedMemorySizeMbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbeInput">StartupProbeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeout">DeploymentTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRoute">HealthRoute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRoute">PredictRoute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMb">SharedMemorySizeMb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.env"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList Env { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList</a>

---

##### `GrpcPorts`<sup>Required</sup> <a name="GrpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPorts"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList GrpcPorts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList</a>

---

##### `HealthProbe`<sup>Required</sup> <a name="HealthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbe"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference HealthProbe { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.ports"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList Ports { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList</a>

---

##### `StartupProbe`<sup>Required</sup> <a name="StartupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbe"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference StartupProbe { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `DeploymentTimeoutInput`<sup>Optional</sup> <a name="DeploymentTimeoutInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeoutInput"></a>

```csharp
public string DeploymentTimeoutInput { get; }
```

- *Type:* string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.envInput"></a>

```csharp
public IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv[] EnvInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>[]

---

##### `GrpcPortsInput`<sup>Optional</sup> <a name="GrpcPortsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPortsInput"></a>

```csharp
public IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts[] GrpcPortsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>[]

---

##### `HealthProbeInput`<sup>Optional</sup> <a name="HealthProbeInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbeInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe HealthProbeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---

##### `HealthRouteInput`<sup>Optional</sup> <a name="HealthRouteInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRouteInput"></a>

```csharp
public string HealthRouteInput { get; }
```

- *Type:* string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.portsInput"></a>

```csharp
public IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts[] PortsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>[]

---

##### `PredictRouteInput`<sup>Optional</sup> <a name="PredictRouteInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRouteInput"></a>

```csharp
public string PredictRouteInput { get; }
```

- *Type:* string

---

##### `SharedMemorySizeMbInput`<sup>Optional</sup> <a name="SharedMemorySizeMbInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMbInput"></a>

```csharp
public string SharedMemorySizeMbInput { get; }
```

- *Type:* string

---

##### `StartupProbeInput`<sup>Optional</sup> <a name="StartupProbeInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbeInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe StartupProbeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `DeploymentTimeout`<sup>Required</sup> <a name="DeploymentTimeout" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeout"></a>

```csharp
public string DeploymentTimeout { get; }
```

- *Type:* string

---

##### `HealthRoute`<sup>Required</sup> <a name="HealthRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRoute"></a>

```csharp
public string HealthRoute { get; }
```

- *Type:* string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `PredictRoute`<sup>Required</sup> <a name="PredictRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRoute"></a>

```csharp
public string PredictRoute { get; }
```

- *Type:* string

---

##### `SharedMemorySizeMb`<sup>Required</sup> <a name="SharedMemorySizeMb" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMb"></a>

```csharp
public string SharedMemorySizeMb { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get"></a>

```csharp
private GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>[]

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPort">ContainerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPortInput"></a>

```csharp
public double ContainerPortInput { get; }
```

- *Type:* double

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPort"></a>

```csharp
public double ContainerPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec">PutExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetExec">ResetExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExec` <a name="PutExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec"></a>

```csharp
private void PutExec(GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---

##### `ResetExec` <a name="ResetExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetExec"></a>

```csharp
private void ResetExec()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetPeriodSeconds"></a>

```csharp
private void ResetPeriodSeconds()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.exec">Exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.execInput">ExecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exec`<sup>Required</sup> <a name="Exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.exec"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference Exec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference</a>

---

##### `ExecInput`<sup>Optional</sup> <a name="ExecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.execInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec ExecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSecondsInput"></a>

```csharp
public double PeriodSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; }
```

- *Type:* double

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineModelToUploadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec">PutContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec">PutExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetArtifactUri">ResetArtifactUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetContainerSpec">ResetContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetExplanationSpec">ResetExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionAliases">ResetVersionAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionDescription">ResetVersionDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerSpec` <a name="PutContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec"></a>

```csharp
private void PutContainerSpec(GoogleVertexAiTrainingPipelineModelToUploadContainerSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---

##### `PutExplanationSpec` <a name="PutExplanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec"></a>

```csharp
private void PutExplanationSpec(GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---

##### `ResetArtifactUri` <a name="ResetArtifactUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetArtifactUri"></a>

```csharp
private void ResetArtifactUri()
```

##### `ResetContainerSpec` <a name="ResetContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetContainerSpec"></a>

```csharp
private void ResetContainerSpec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetExplanationSpec` <a name="ResetExplanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetExplanationSpec"></a>

```csharp
private void ResetExplanationSpec()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetVersionAliases` <a name="ResetVersionAliases" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionAliases"></a>

```csharp
private void ResetVersionAliases()
```

##### `ResetVersionDescription` <a name="ResetVersionDescription" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionDescription"></a>

```csharp
private void ResetVersionDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpec">ContainerSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpec">ExplanationSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUriInput">ArtifactUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpecInput">ContainerSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpecInput">ExplanationSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliasesInput">VersionAliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescriptionInput">VersionDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUri">ArtifactUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliases">VersionAliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescription">VersionDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerSpec`<sup>Required</sup> <a name="ContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpec"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference ContainerSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference</a>

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference</a>

---

##### `ExplanationSpec`<sup>Required</sup> <a name="ExplanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpec"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference ExplanationSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ArtifactUriInput`<sup>Optional</sup> <a name="ArtifactUriInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUriInput"></a>

```csharp
public string ArtifactUriInput { get; }
```

- *Type:* string

---

##### `ContainerSpecInput`<sup>Optional</sup> <a name="ContainerSpecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpecInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadContainerSpec ContainerSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpecInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---

##### `ExplanationSpecInput`<sup>Optional</sup> <a name="ExplanationSpecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpecInput"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec ExplanationSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionAliasesInput`<sup>Optional</sup> <a name="VersionAliasesInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliasesInput"></a>

```csharp
public string[] VersionAliasesInput { get; }
```

- *Type:* string[]

---

##### `VersionDescriptionInput`<sup>Optional</sup> <a name="VersionDescriptionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescriptionInput"></a>

```csharp
public string VersionDescriptionInput { get; }
```

- *Type:* string

---

##### `ArtifactUri`<sup>Required</sup> <a name="ArtifactUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUri"></a>

```csharp
public string ArtifactUri { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionAliases`<sup>Required</sup> <a name="VersionAliases" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliases"></a>

```csharp
public string[] VersionAliases { get; }
```

- *Type:* string[]

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescription"></a>

```csharp
public string VersionDescription { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiTrainingPipelineModelToUpload InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

---


### GoogleVertexAiTrainingPipelineTimeoutsOutputReference <a name="GoogleVertexAiTrainingPipelineTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiTrainingPipelineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiTrainingPipelineTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a>

---



