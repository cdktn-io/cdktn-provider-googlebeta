# `googleVertexAiPipelineJob` Submodule <a name="`googleVertexAiPipelineJob` Submodule" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiPipelineJob <a name="GoogleVertexAiPipelineJob" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job google_vertex_ai_pipeline_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJob(Construct Scope, string Id, GoogleVertexAiPipelineJobConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig">GoogleVertexAiPipelineJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig">GoogleVertexAiPipelineJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putPscInterfaceConfig">PutPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig">PutRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineJobId">ResetPipelineJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineSpec">ResetPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPreflightValidations">ResetPreflightValidations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPscInterfaceConfig">ResetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetReservedIpRanges">ResetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRuntimeConfig">ResetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTemplateUri">ResetTemplateUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(GoogleVertexAiPipelineJobEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

---

##### `PutPscInterfaceConfig` <a name="PutPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putPscInterfaceConfig"></a>

```csharp
private void PutPscInterfaceConfig(GoogleVertexAiPipelineJobPscInterfaceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

---

##### `PutRuntimeConfig` <a name="PutRuntimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig"></a>

```csharp
private void PutRuntimeConfig(GoogleVertexAiPipelineJobRuntimeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVertexAiPipelineJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetPipelineJobId` <a name="ResetPipelineJobId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineJobId"></a>

```csharp
private void ResetPipelineJobId()
```

##### `ResetPipelineSpec` <a name="ResetPipelineSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineSpec"></a>

```csharp
private void ResetPipelineSpec()
```

##### `ResetPreflightValidations` <a name="ResetPreflightValidations" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPreflightValidations"></a>

```csharp
private void ResetPreflightValidations()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPscInterfaceConfig` <a name="ResetPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPscInterfaceConfig"></a>

```csharp
private void ResetPscInterfaceConfig()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReservedIpRanges` <a name="ResetReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetReservedIpRanges"></a>

```csharp
private void ResetReservedIpRanges()
```

##### `ResetRuntimeConfig` <a name="ResetRuntimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRuntimeConfig"></a>

```csharp
private void ResetRuntimeConfig()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetTemplateUri` <a name="ResetTemplateUri" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTemplateUri"></a>

```csharp
private void ResetTemplateUri()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiPipelineJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiPipelineJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiPipelineJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiPipelineJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiPipelineJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleVertexAiPipelineJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiPipelineJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiPipelineJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiPipelineJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference">GoogleVertexAiPipelineJobEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList">GoogleVertexAiPipelineJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.jobDetail">JobDetail</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList">GoogleVertexAiPipelineJobJobDetailList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference">GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference">GoogleVertexAiPipelineJobRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.scheduleName">ScheduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateMetadata">TemplateMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList">GoogleVertexAiPipelineJobTemplateMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference">GoogleVertexAiPipelineJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobIdInput">PipelineJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpecInput">PipelineSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidationsInput">PreflightValidationsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfigInput">PscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRangesInput">ReservedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfigInput">RuntimeConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUriInput">TemplateUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobId">PipelineJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpec">PipelineSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidations">PreflightValidations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUri">TemplateUri</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiPipelineJobEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference">GoogleVertexAiPipelineJobEncryptionSpecOutputReference</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.error"></a>

```csharp
public GoogleVertexAiPipelineJobErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList">GoogleVertexAiPipelineJobErrorList</a>

---

##### `JobDetail`<sup>Required</sup> <a name="JobDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.jobDetail"></a>

```csharp
public GoogleVertexAiPipelineJobJobDetailList JobDetail { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList">GoogleVertexAiPipelineJobJobDetailList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PscInterfaceConfig`<sup>Required</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfig"></a>

```csharp
public GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference PscInterfaceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference">GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference</a>

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfig"></a>

```csharp
public GoogleVertexAiPipelineJobRuntimeConfigOutputReference RuntimeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference">GoogleVertexAiPipelineJobRuntimeConfigOutputReference</a>

---

##### `ScheduleName`<sup>Required</sup> <a name="ScheduleName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.scheduleName"></a>

```csharp
public string ScheduleName { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TemplateMetadata`<sup>Required</sup> <a name="TemplateMetadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateMetadata"></a>

```csharp
public GoogleVertexAiPipelineJobTemplateMetadataList TemplateMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList">GoogleVertexAiPipelineJobTemplateMetadataList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeouts"></a>

```csharp
public GoogleVertexAiPipelineJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference">GoogleVertexAiPipelineJobTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpecInput"></a>

```csharp
public GoogleVertexAiPipelineJobEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PipelineJobIdInput`<sup>Optional</sup> <a name="PipelineJobIdInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobIdInput"></a>

```csharp
public string PipelineJobIdInput { get; }
```

- *Type:* string

---

##### `PipelineSpecInput`<sup>Optional</sup> <a name="PipelineSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpecInput"></a>

```csharp
public string PipelineSpecInput { get; }
```

- *Type:* string

---

##### `PreflightValidationsInput`<sup>Optional</sup> <a name="PreflightValidationsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidationsInput"></a>

```csharp
public bool|IResolvable PreflightValidationsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PscInterfaceConfigInput`<sup>Optional</sup> <a name="PscInterfaceConfigInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfigInput"></a>

```csharp
public GoogleVertexAiPipelineJobPscInterfaceConfig PscInterfaceConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReservedIpRangesInput`<sup>Optional</sup> <a name="ReservedIpRangesInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRangesInput"></a>

```csharp
public string[] ReservedIpRangesInput { get; }
```

- *Type:* string[]

---

##### `RuntimeConfigInput`<sup>Optional</sup> <a name="RuntimeConfigInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfigInput"></a>

```csharp
public GoogleVertexAiPipelineJobRuntimeConfig RuntimeConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `TemplateUriInput`<sup>Optional</sup> <a name="TemplateUriInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUriInput"></a>

```csharp
public string TemplateUriInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleVertexAiPipelineJobTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `PipelineJobId`<sup>Required</sup> <a name="PipelineJobId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobId"></a>

```csharp
public string PipelineJobId { get; }
```

- *Type:* string

---

##### `PipelineSpec`<sup>Required</sup> <a name="PipelineSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpec"></a>

```csharp
public string PipelineSpec { get; }
```

- *Type:* string

---

##### `PreflightValidations`<sup>Required</sup> <a name="PreflightValidations" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidations"></a>

```csharp
public bool|IResolvable PreflightValidations { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReservedIpRanges`<sup>Required</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRanges"></a>

```csharp
public string[] ReservedIpRanges { get; }
```

- *Type:* string[]

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `TemplateUri`<sup>Required</sup> <a name="TemplateUri" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUri"></a>

```csharp
public string TemplateUri { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiPipelineJobConfig <a name="GoogleVertexAiPipelineJobConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DeletionPolicy = null,
    string DisplayName = null,
    GoogleVertexAiPipelineJobEncryptionSpec EncryptionSpec = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Network = null,
    string PipelineJobId = null,
    string PipelineSpec = null,
    bool|IResolvable PreflightValidations = null,
    string Project = null,
    GoogleVertexAiPipelineJobPscInterfaceConfig PscInterfaceConfig = null,
    string Region = null,
    string[] ReservedIpRanges = null,
    GoogleVertexAiPipelineJobRuntimeConfig RuntimeConfig = null,
    string ServiceAccount = null,
    string TemplateUri = null,
    GoogleVertexAiPipelineJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_pipeline_job.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the Pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#id GoogleVertexAiPipelineJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize PipelineJob. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.network">Network</a></code> | <code>string</code> | The full name of the Compute Engine network to which the Pipeline Job's workload should be peered. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineJobId">PipelineJobId</a></code> | <code>string</code> | The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineSpec">PipelineSpec</a></code> | <code>string</code> | The spec of the pipeline. This is a JSON object that describes the pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.preflightValidations">PreflightValidations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to do component level validations before job creation. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#project GoogleVertexAiPipelineJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.region">Region</a></code> | <code>string</code> | The region of the pipeline job. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>string[]</code> | A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The service account that the pipeline workload runs as. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.templateUri">TemplateUri</a></code> | <code>string</code> | A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_pipeline_job.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#deletion_policy GoogleVertexAiPipelineJob#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the Pipeline.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#display_name GoogleVertexAiPipelineJob#display_name}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiPipelineJobEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#encryption_spec GoogleVertexAiPipelineJob#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#id GoogleVertexAiPipelineJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels with user-defined metadata to organize PipelineJob.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#labels GoogleVertexAiPipelineJob#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The full name of the Compute Engine network to which the Pipeline Job's workload should be peered.

For example, 'projects/12345/global/networks/myVPC'. Format is of the form 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is a network name. Private services access must already be configured for the network. Pipeline job will apply the network configuration to the Google Cloud resources being launched, if applied, such as Vertex AI Training or Dataflow job. If left unspecified, the workload is not peered with any network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#network GoogleVertexAiPipelineJob#network}

---

##### `PipelineJobId`<sup>Optional</sup> <a name="PipelineJobId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineJobId"></a>

```csharp
public string PipelineJobId { get; set; }
```

- *Type:* string

The ID to use for the PipelineJob, which will become the final component of the PipelineJob name.

If not provided, an ID will be automatically generated.
This value should be less than 128 characters, and valid characters are '/[a-z][0-9]-/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#pipeline_job_id GoogleVertexAiPipelineJob#pipeline_job_id}

---

##### `PipelineSpec`<sup>Optional</sup> <a name="PipelineSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineSpec"></a>

```csharp
public string PipelineSpec { get; set; }
```

- *Type:* string

The spec of the pipeline. This is a JSON object that describes the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#pipeline_spec GoogleVertexAiPipelineJob#pipeline_spec}

---

##### `PreflightValidations`<sup>Optional</sup> <a name="PreflightValidations" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.preflightValidations"></a>

```csharp
public bool|IResolvable PreflightValidations { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to do component level validations before job creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#preflight_validations GoogleVertexAiPipelineJob#preflight_validations}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#project GoogleVertexAiPipelineJob#project}.

---

##### `PscInterfaceConfig`<sup>Optional</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pscInterfaceConfig"></a>

```csharp
public GoogleVertexAiPipelineJobPscInterfaceConfig PscInterfaceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#psc_interface_config GoogleVertexAiPipelineJob#psc_interface_config}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the pipeline job. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#region GoogleVertexAiPipelineJob#region}

---

##### `ReservedIpRanges`<sup>Optional</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.reservedIpRanges"></a>

```csharp
public string[] ReservedIpRanges { get; set; }
```

- *Type:* string[]

A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload.

If set, we will deploy the Pipeline Job's workload within the provided ip ranges. Otherwise, the job will be deployed to any ip ranges under the provided VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#reserved_ip_ranges GoogleVertexAiPipelineJob#reserved_ip_ranges}

---

##### `RuntimeConfig`<sup>Optional</sup> <a name="RuntimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.runtimeConfig"></a>

```csharp
public GoogleVertexAiPipelineJobRuntimeConfig RuntimeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#runtime_config GoogleVertexAiPipelineJob#runtime_config}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The service account that the pipeline workload runs as.

If not specified, the Compute Engine default service account in the project will be used. Users starting the pipeline must have the iam.serviceAccounts.actAs permission on this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#service_account GoogleVertexAiPipelineJob#service_account}

---

##### `TemplateUri`<sup>Optional</sup> <a name="TemplateUri" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.templateUri"></a>

```csharp
public string TemplateUri { get; set; }
```

- *Type:* string

A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#template_uri GoogleVertexAiPipelineJob#template_uri}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.timeouts"></a>

```csharp
public GoogleVertexAiPipelineJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#timeouts GoogleVertexAiPipelineJob#timeouts}

---

### GoogleVertexAiPipelineJobEncryptionSpec <a name="GoogleVertexAiPipelineJobEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.

Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#kms_key_name GoogleVertexAiPipelineJob#kms_key_name}

---

### GoogleVertexAiPipelineJobError <a name="GoogleVertexAiPipelineJobError" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobError {

};
```


### GoogleVertexAiPipelineJobJobDetail <a name="GoogleVertexAiPipelineJobJobDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobJobDetail {

};
```


### GoogleVertexAiPipelineJobJobDetailPipelineContext <a name="GoogleVertexAiPipelineJobJobDetailPipelineContext" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobJobDetailPipelineContext {

};
```


### GoogleVertexAiPipelineJobJobDetailPipelineRunContext <a name="GoogleVertexAiPipelineJobJobDetailPipelineRunContext" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobJobDetailPipelineRunContext {

};
```


### GoogleVertexAiPipelineJobJobDetailTaskDetails <a name="GoogleVertexAiPipelineJobJobDetailTaskDetails" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobJobDetailTaskDetails {

};
```


### GoogleVertexAiPipelineJobJobDetailTaskDetailsError <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsError" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobJobDetailTaskDetailsError {

};
```


### GoogleVertexAiPipelineJobPscInterfaceConfig <a name="GoogleVertexAiPipelineJobPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobPscInterfaceConfig {
    IResolvable|GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] DnsPeeringConfigs = null,
    string NetworkAttachment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | The name of the Compute Engine network attachment to attach to the resource within the region and user project. |

---

##### `DnsPeeringConfigs`<sup>Optional</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```csharp
public IResolvable|GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] DnsPeeringConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#dns_peering_configs GoogleVertexAiPipelineJob#dns_peering_configs}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

The name of the Compute Engine network attachment to attach to the resource within the region and user project.

To specify this field, you must have already created a network attachment. This field is only used for resources using PSC-I.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#network_attachment GoogleVertexAiPipelineJob#network_attachment}

---

### GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs <a name="GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs {
    string Domain,
    string TargetNetwork,
    string TargetProject
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.domain">Domain</a></code> | <code>string</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">TargetNetwork</a></code> | <code>string</code> | The VPC network name in the targetProject where the DNS zone specified by domain is visible. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetProject">TargetProject</a></code> | <code>string</code> | The project ID hosting the Cloud DNS managed zone that contains the above domain. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#domain GoogleVertexAiPipelineJob#domain}

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```csharp
public string TargetNetwork { get; set; }
```

- *Type:* string

The VPC network name in the targetProject where the DNS zone specified by domain is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#target_network GoogleVertexAiPipelineJob#target_network}

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```csharp
public string TargetProject { get; set; }
```

- *Type:* string

The project ID hosting the Cloud DNS managed zone that contains the above domain.

The Vertex AI Service Agent must be granted the dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#target_project GoogleVertexAiPipelineJob#target_project}

---

### GoogleVertexAiPipelineJobRuntimeConfig <a name="GoogleVertexAiPipelineJobRuntimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobRuntimeConfig {
    string GcsOutputDirectory,
    GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime DefaultRuntime = null,
    string FailurePolicy = null,
    IResolvable|GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts[] InputArtifacts = null,
    System.Collections.Generic.IDictionary<string, string> ParameterValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.gcsOutputDirectory">GcsOutputDirectory</a></code> | <code>string</code> | A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.defaultRuntime">DefaultRuntime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a></code> | default_runtime block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.failurePolicy">FailurePolicy</a></code> | <code>string</code> | Represents the failure policy of a pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.inputArtifacts">InputArtifacts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]</code> | input_artifacts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.parameterValues">ParameterValues</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The runtime parameters of the PipelineJob. |

---

##### `GcsOutputDirectory`<sup>Required</sup> <a name="GcsOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.gcsOutputDirectory"></a>

```csharp
public string GcsOutputDirectory { get; set; }
```

- *Type:* string

A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline.

It is used by the system to generate the paths of output artifacts. The artifact paths are generated with a sub-directory pattern '{job_id}/{task_id}/{output_key}' under the specified output directory. The service account specified in this pipeline must have the 'storage.objects.get' and 'storage.objects.create' permissions for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#gcs_output_directory GoogleVertexAiPipelineJob#gcs_output_directory}

---

##### `DefaultRuntime`<sup>Optional</sup> <a name="DefaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.defaultRuntime"></a>

```csharp
public GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime DefaultRuntime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

default_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#default_runtime GoogleVertexAiPipelineJob#default_runtime}

---

##### `FailurePolicy`<sup>Optional</sup> <a name="FailurePolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.failurePolicy"></a>

```csharp
public string FailurePolicy { get; set; }
```

- *Type:* string

Represents the failure policy of a pipeline.

Currently, the default of a pipeline is that the pipeline will continue to run until no more tasks can be executed, also known as 'PIPELINE_FAILURE_POLICY_FAIL_SLOW'. However, if a pipeline is set to 'PIPELINE_FAILURE_POLICY_FAIL_FAST', it will stop scheduling any new tasks as soon as the pipeline fails.
Possible values are: 'PIPELINE_FAILURE_POLICY_UNSPECIFIED', 'PIPELINE_FAILURE_POLICY_FAIL_SLOW', 'PIPELINE_FAILURE_POLICY_FAIL_FAST'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#failure_policy GoogleVertexAiPipelineJob#failure_policy}

---

##### `InputArtifacts`<sup>Optional</sup> <a name="InputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.inputArtifacts"></a>

```csharp
public IResolvable|GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts[] InputArtifacts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]

input_artifacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#input_artifacts GoogleVertexAiPipelineJob#input_artifacts}

---

##### `ParameterValues`<sup>Optional</sup> <a name="ParameterValues" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.parameterValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParameterValues { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The runtime parameters of the PipelineJob.

The parameters will be passed into PipelineJob.pipeline_spec to replace the placeholders at runtime. This field is used by pipelines built using 'PipelineJob.pipeline_spec.schema_version' 2.1.0, such as pipelines built using Kubeflow Pipelines SDK 1.9 or higher and the v2 DSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#parameter_values GoogleVertexAiPipelineJob#parameter_values}

---

### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime {
    GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail PersistentResourceRuntimeDetail = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime.property.persistentResourceRuntimeDetail">PersistentResourceRuntimeDetail</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a></code> | persistent_resource_runtime_detail block. |

---

##### `PersistentResourceRuntimeDetail`<sup>Optional</sup> <a name="PersistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime.property.persistentResourceRuntimeDetail"></a>

```csharp
public GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail PersistentResourceRuntimeDetail { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

persistent_resource_runtime_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#persistent_resource_runtime_detail GoogleVertexAiPipelineJob#persistent_resource_runtime_detail}

---

### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail {
    string PersistentResourceName = null,
    string TaskResourceUnavailableTimeoutBehavior = null,
    string TaskResourceUnavailableWaitTimeMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.persistentResourceName">PersistentResourceName</a></code> | <code>string</code> | PersistentResource name, format: 'projects/{project}/locations/{location}/persistentResources/{persistent_resource}'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableTimeoutBehavior">TaskResourceUnavailableTimeoutBehavior</a></code> | <code>string</code> | Sets the behavior when a task has reached the defined wait duration while waiting for task resources to become available in the specified persistent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableWaitTimeMs">TaskResourceUnavailableWaitTimeMs</a></code> | <code>string</code> | The maxWaitTime for the task if the persistent resource is unavailable. |

---

##### `PersistentResourceName`<sup>Optional</sup> <a name="PersistentResourceName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.persistentResourceName"></a>

```csharp
public string PersistentResourceName { get; set; }
```

- *Type:* string

PersistentResource name, format: 'projects/{project}/locations/{location}/persistentResources/{persistent_resource}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#persistent_resource_name GoogleVertexAiPipelineJob#persistent_resource_name}

---

##### `TaskResourceUnavailableTimeoutBehavior`<sup>Optional</sup> <a name="TaskResourceUnavailableTimeoutBehavior" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableTimeoutBehavior"></a>

```csharp
public string TaskResourceUnavailableTimeoutBehavior { get; set; }
```

- *Type:* string

Sets the behavior when a task has reached the defined wait duration while waiting for task resources to become available in the specified persistent resource.

Possible values are: 'TASK_RESOURCE_UNAVAILABLE_TIMEOUT_BEHAVIOR_UNSPECIFIED', 'FAIL', 'FALL_BACK_TO_ON_DEMAND'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#task_resource_unavailable_timeout_behavior GoogleVertexAiPipelineJob#task_resource_unavailable_timeout_behavior}

---

##### `TaskResourceUnavailableWaitTimeMs`<sup>Optional</sup> <a name="TaskResourceUnavailableWaitTimeMs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableWaitTimeMs"></a>

```csharp
public string TaskResourceUnavailableWaitTimeMs { get; set; }
```

- *Type:* string

The maxWaitTime for the task if the persistent resource is unavailable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#task_resource_unavailable_wait_time_ms GoogleVertexAiPipelineJob#task_resource_unavailable_wait_time_ms}

---

### GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts <a name="GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts {
    string ArtifactId,
    string ArtifactKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactId">ArtifactId</a></code> | <code>string</code> | Artifact resource id from MLMD. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactKey">ArtifactKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#artifact_key GoogleVertexAiPipelineJob#artifact_key}. |

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactId"></a>

```csharp
public string ArtifactId { get; set; }
```

- *Type:* string

Artifact resource id from MLMD.

Which is the last portion of an artifact resource name: 'projects/{project}/locations/{location}/metadataStores/default/artifacts/{artifact_id}'. The artifact must be within the same project, location and default metadatastore as the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#artifact_id GoogleVertexAiPipelineJob#artifact_id}

---

##### `ArtifactKey`<sup>Required</sup> <a name="ArtifactKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactKey"></a>

```csharp
public string ArtifactKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#artifact_key GoogleVertexAiPipelineJob#artifact_key}.

---

### GoogleVertexAiPipelineJobTemplateMetadata <a name="GoogleVertexAiPipelineJobTemplateMetadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobTemplateMetadata {

};
```


### GoogleVertexAiPipelineJobTimeouts <a name="GoogleVertexAiPipelineJobTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#create GoogleVertexAiPipelineJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#delete GoogleVertexAiPipelineJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#update GoogleVertexAiPipelineJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#create GoogleVertexAiPipelineJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#delete GoogleVertexAiPipelineJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#update GoogleVertexAiPipelineJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiPipelineJobEncryptionSpecOutputReference <a name="GoogleVertexAiPipelineJobEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPipelineJobEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

---


### GoogleVertexAiPipelineJobErrorList <a name="GoogleVertexAiPipelineJobErrorList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.get"></a>

```csharp
private GoogleVertexAiPipelineJobErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiPipelineJobErrorOutputReference <a name="GoogleVertexAiPipelineJobErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.details">Details</a></code> | <code>Io.Cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError">GoogleVertexAiPipelineJobError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.details"></a>

```csharp
public StringMapList Details { get; }
```

- *Type:* Io.Cdktn.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPipelineJobError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError">GoogleVertexAiPipelineJobError</a>

---


### GoogleVertexAiPipelineJobJobDetailList <a name="GoogleVertexAiPipelineJobJobDetailList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobJobDetailList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.get"></a>

```csharp
private GoogleVertexAiPipelineJobJobDetailOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiPipelineJobJobDetailOutputReference <a name="GoogleVertexAiPipelineJobJobDetailOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobJobDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineContext">PipelineContext</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList">GoogleVertexAiPipelineJobJobDetailPipelineContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineRunContext">PipelineRunContext</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList">GoogleVertexAiPipelineJobJobDetailPipelineRunContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.taskDetails">TaskDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList">GoogleVertexAiPipelineJobJobDetailTaskDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail">GoogleVertexAiPipelineJobJobDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PipelineContext`<sup>Required</sup> <a name="PipelineContext" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineContext"></a>

```csharp
public GoogleVertexAiPipelineJobJobDetailPipelineContextList PipelineContext { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList">GoogleVertexAiPipelineJobJobDetailPipelineContextList</a>

---

##### `PipelineRunContext`<sup>Required</sup> <a name="PipelineRunContext" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineRunContext"></a>

```csharp
public GoogleVertexAiPipelineJobJobDetailPipelineRunContextList PipelineRunContext { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList">GoogleVertexAiPipelineJobJobDetailPipelineRunContextList</a>

---

##### `TaskDetails`<sup>Required</sup> <a name="TaskDetails" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.taskDetails"></a>

```csharp
public GoogleVertexAiPipelineJobJobDetailTaskDetailsList TaskDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList">GoogleVertexAiPipelineJobJobDetailTaskDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPipelineJobJobDetail InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail">GoogleVertexAiPipelineJobJobDetail</a>

---


### GoogleVertexAiPipelineJobJobDetailPipelineContextList <a name="GoogleVertexAiPipelineJobJobDetailPipelineContextList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobJobDetailPipelineContextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.get"></a>

```csharp
private GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference <a name="GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.labels">Labels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.parentContexts">ParentContexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaTitle">SchemaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaVersion">SchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext">GoogleVertexAiPipelineJobJobDetailPipelineContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentContexts`<sup>Required</sup> <a name="ParentContexts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.parentContexts"></a>

```csharp
public string[] ParentContexts { get; }
```

- *Type:* string[]

---

##### `SchemaTitle`<sup>Required</sup> <a name="SchemaTitle" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaTitle"></a>

```csharp
public string SchemaTitle { get; }
```

- *Type:* string

---

##### `SchemaVersion`<sup>Required</sup> <a name="SchemaVersion" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaVersion"></a>

```csharp
public string SchemaVersion { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPipelineJobJobDetailPipelineContext InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext">GoogleVertexAiPipelineJobJobDetailPipelineContext</a>

---


### GoogleVertexAiPipelineJobJobDetailPipelineRunContextList <a name="GoogleVertexAiPipelineJobJobDetailPipelineRunContextList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobJobDetailPipelineRunContextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.get"></a>

```csharp
private GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference <a name="GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.labels">Labels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.parentContexts">ParentContexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaTitle">SchemaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaVersion">SchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext">GoogleVertexAiPipelineJobJobDetailPipelineRunContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentContexts`<sup>Required</sup> <a name="ParentContexts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.parentContexts"></a>

```csharp
public string[] ParentContexts { get; }
```

- *Type:* string[]

---

##### `SchemaTitle`<sup>Required</sup> <a name="SchemaTitle" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaTitle"></a>

```csharp
public string SchemaTitle { get; }
```

- *Type:* string

---

##### `SchemaVersion`<sup>Required</sup> <a name="SchemaVersion" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaVersion"></a>

```csharp
public string SchemaVersion { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPipelineJobJobDetailPipelineRunContext InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext">GoogleVertexAiPipelineJobJobDetailPipelineRunContext</a>

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.get"></a>

```csharp
private GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError">GoogleVertexAiPipelineJobJobDetailTaskDetailsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPipelineJobJobDetailTaskDetailsError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError">GoogleVertexAiPipelineJobJobDetailTaskDetailsError</a>

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsList <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobJobDetailTaskDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.get"></a>

```csharp
private GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList">GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.parentTaskId">ParentTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskId">TaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskName">TaskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskUniqueName">TaskUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails">GoogleVertexAiPipelineJobJobDetailTaskDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.error"></a>

```csharp
public GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList">GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList</a>

---

##### `ParentTaskId`<sup>Required</sup> <a name="ParentTaskId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.parentTaskId"></a>

```csharp
public string ParentTaskId { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskId"></a>

```csharp
public string TaskId { get; }
```

- *Type:* string

---

##### `TaskName`<sup>Required</sup> <a name="TaskName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskName"></a>

```csharp
public string TaskName { get; }
```

- *Type:* string

---

##### `TaskUniqueName`<sup>Required</sup> <a name="TaskUniqueName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskUniqueName"></a>

```csharp
public string TaskUniqueName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPipelineJobJobDetailTaskDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails">GoogleVertexAiPipelineJobJobDetailTaskDetails</a>

---


### GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList <a name="GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```csharp
private GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]

---


### GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">TargetProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">TargetProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```csharp
public string TargetNetworkInput { get; }
```

- *Type:* string

---

##### `TargetProjectInput`<sup>Optional</sup> <a name="TargetProjectInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```csharp
public string TargetProjectInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```csharp
public string TargetNetwork { get; }
```

- *Type:* string

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```csharp
public string TargetProject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>

---


### GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference <a name="GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs">PutDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">ResetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsPeeringConfigs` <a name="PutDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```csharp
private void PutDnsPeeringConfigs(IResolvable|GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]

---

##### `ResetDnsPeeringConfigs` <a name="ResetDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```csharp
private void ResetDnsPeeringConfigs()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```csharp
private void ResetNetworkAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">DnsPeeringConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsPeeringConfigs`<sup>Required</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```csharp
public GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList DnsPeeringConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `DnsPeeringConfigsInput`<sup>Optional</sup> <a name="DnsPeeringConfigsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```csharp
public IResolvable|GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] DnsPeeringConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs</a>[]

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPipelineJobPscInterfaceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

---


### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.putPersistentResourceRuntimeDetail">PutPersistentResourceRuntimeDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resetPersistentResourceRuntimeDetail">ResetPersistentResourceRuntimeDetail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPersistentResourceRuntimeDetail` <a name="PutPersistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.putPersistentResourceRuntimeDetail"></a>

```csharp
private void PutPersistentResourceRuntimeDetail(GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.putPersistentResourceRuntimeDetail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

---

##### `ResetPersistentResourceRuntimeDetail` <a name="ResetPersistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resetPersistentResourceRuntimeDetail"></a>

```csharp
private void ResetPersistentResourceRuntimeDetail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetail">PersistentResourceRuntimeDetail</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetailInput">PersistentResourceRuntimeDetailInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PersistentResourceRuntimeDetail`<sup>Required</sup> <a name="PersistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetail"></a>

```csharp
public GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference PersistentResourceRuntimeDetail { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference</a>

---

##### `PersistentResourceRuntimeDetailInput`<sup>Optional</sup> <a name="PersistentResourceRuntimeDetailInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetailInput"></a>

```csharp
public GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail PersistentResourceRuntimeDetailInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

---


### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetPersistentResourceName">ResetPersistentResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableTimeoutBehavior">ResetTaskResourceUnavailableTimeoutBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableWaitTimeMs">ResetTaskResourceUnavailableWaitTimeMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPersistentResourceName` <a name="ResetPersistentResourceName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetPersistentResourceName"></a>

```csharp
private void ResetPersistentResourceName()
```

##### `ResetTaskResourceUnavailableTimeoutBehavior` <a name="ResetTaskResourceUnavailableTimeoutBehavior" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableTimeoutBehavior"></a>

```csharp
private void ResetTaskResourceUnavailableTimeoutBehavior()
```

##### `ResetTaskResourceUnavailableWaitTimeMs` <a name="ResetTaskResourceUnavailableWaitTimeMs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableWaitTimeMs"></a>

```csharp
private void ResetTaskResourceUnavailableWaitTimeMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceNameInput">PersistentResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehaviorInput">TaskResourceUnavailableTimeoutBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMsInput">TaskResourceUnavailableWaitTimeMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceName">PersistentResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehavior">TaskResourceUnavailableTimeoutBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMs">TaskResourceUnavailableWaitTimeMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PersistentResourceNameInput`<sup>Optional</sup> <a name="PersistentResourceNameInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceNameInput"></a>

```csharp
public string PersistentResourceNameInput { get; }
```

- *Type:* string

---

##### `TaskResourceUnavailableTimeoutBehaviorInput`<sup>Optional</sup> <a name="TaskResourceUnavailableTimeoutBehaviorInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehaviorInput"></a>

```csharp
public string TaskResourceUnavailableTimeoutBehaviorInput { get; }
```

- *Type:* string

---

##### `TaskResourceUnavailableWaitTimeMsInput`<sup>Optional</sup> <a name="TaskResourceUnavailableWaitTimeMsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMsInput"></a>

```csharp
public string TaskResourceUnavailableWaitTimeMsInput { get; }
```

- *Type:* string

---

##### `PersistentResourceName`<sup>Required</sup> <a name="PersistentResourceName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceName"></a>

```csharp
public string PersistentResourceName { get; }
```

- *Type:* string

---

##### `TaskResourceUnavailableTimeoutBehavior`<sup>Required</sup> <a name="TaskResourceUnavailableTimeoutBehavior" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehavior"></a>

```csharp
public string TaskResourceUnavailableTimeoutBehavior { get; }
```

- *Type:* string

---

##### `TaskResourceUnavailableWaitTimeMs`<sup>Required</sup> <a name="TaskResourceUnavailableWaitTimeMs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMs"></a>

```csharp
public string TaskResourceUnavailableWaitTimeMs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

---


### GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList <a name="GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.get"></a>

```csharp
private GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]

---


### GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKeyInput">ArtifactKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactId">ArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKey">ArtifactKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactIdInput"></a>

```csharp
public string ArtifactIdInput { get; }
```

- *Type:* string

---

##### `ArtifactKeyInput`<sup>Optional</sup> <a name="ArtifactKeyInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKeyInput"></a>

```csharp
public string ArtifactKeyInput { get; }
```

- *Type:* string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactId"></a>

```csharp
public string ArtifactId { get; }
```

- *Type:* string

---

##### `ArtifactKey`<sup>Required</sup> <a name="ArtifactKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKey"></a>

```csharp
public string ArtifactKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>

---


### GoogleVertexAiPipelineJobRuntimeConfigOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobRuntimeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putDefaultRuntime">PutDefaultRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putInputArtifacts">PutInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetDefaultRuntime">ResetDefaultRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetFailurePolicy">ResetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetInputArtifacts">ResetInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetParameterValues">ResetParameterValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultRuntime` <a name="PutDefaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putDefaultRuntime"></a>

```csharp
private void PutDefaultRuntime(GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putDefaultRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

---

##### `PutInputArtifacts` <a name="PutInputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putInputArtifacts"></a>

```csharp
private void PutInputArtifacts(IResolvable|GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putInputArtifacts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]

---

##### `ResetDefaultRuntime` <a name="ResetDefaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetDefaultRuntime"></a>

```csharp
private void ResetDefaultRuntime()
```

##### `ResetFailurePolicy` <a name="ResetFailurePolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetFailurePolicy"></a>

```csharp
private void ResetFailurePolicy()
```

##### `ResetInputArtifacts` <a name="ResetInputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetInputArtifacts"></a>

```csharp
private void ResetInputArtifacts()
```

##### `ResetParameterValues` <a name="ResetParameterValues" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetParameterValues"></a>

```csharp
private void ResetParameterValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntime">DefaultRuntime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifacts">InputArtifacts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList">GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntimeInput">DefaultRuntimeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicyInput">FailurePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectoryInput">GcsOutputDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifactsInput">InputArtifactsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValuesInput">ParameterValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectory">GcsOutputDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValues">ParameterValues</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultRuntime`<sup>Required</sup> <a name="DefaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntime"></a>

```csharp
public GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference DefaultRuntime { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference</a>

---

##### `InputArtifacts`<sup>Required</sup> <a name="InputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifacts"></a>

```csharp
public GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList InputArtifacts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList">GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList</a>

---

##### `DefaultRuntimeInput`<sup>Optional</sup> <a name="DefaultRuntimeInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntimeInput"></a>

```csharp
public GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime DefaultRuntimeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicyInput"></a>

```csharp
public string FailurePolicyInput { get; }
```

- *Type:* string

---

##### `GcsOutputDirectoryInput`<sup>Optional</sup> <a name="GcsOutputDirectoryInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectoryInput"></a>

```csharp
public string GcsOutputDirectoryInput { get; }
```

- *Type:* string

---

##### `InputArtifactsInput`<sup>Optional</sup> <a name="InputArtifactsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifactsInput"></a>

```csharp
public IResolvable|GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts[] InputArtifactsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts">GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts</a>[]

---

##### `ParameterValuesInput`<sup>Optional</sup> <a name="ParameterValuesInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParameterValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicy"></a>

```csharp
public string FailurePolicy { get; }
```

- *Type:* string

---

##### `GcsOutputDirectory`<sup>Required</sup> <a name="GcsOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectory"></a>

```csharp
public string GcsOutputDirectory { get; }
```

- *Type:* string

---

##### `ParameterValues`<sup>Required</sup> <a name="ParameterValues" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParameterValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPipelineJobRuntimeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

---


### GoogleVertexAiPipelineJobTemplateMetadataList <a name="GoogleVertexAiPipelineJobTemplateMetadataList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobTemplateMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.get"></a>

```csharp
private GoogleVertexAiPipelineJobTemplateMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiPipelineJobTemplateMetadataOutputReference <a name="GoogleVertexAiPipelineJobTemplateMetadataOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobTemplateMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata">GoogleVertexAiPipelineJobTemplateMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPipelineJobTemplateMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata">GoogleVertexAiPipelineJobTemplateMetadata</a>

---


### GoogleVertexAiPipelineJobTimeoutsOutputReference <a name="GoogleVertexAiPipelineJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPipelineJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiPipelineJobTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a>

---



