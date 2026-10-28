# `googleVertexAiRagFile` Submodule <a name="`googleVertexAiRagFile` Submodule" id="@cdktn/provider-google-beta.googleVertexAiRagFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiRagFile <a name="GoogleVertexAiRagFile" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file google_vertex_ai_rag_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFile(Construct Scope, string Id, GoogleVertexAiRagFileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig">GoogleVertexAiRagFileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig">GoogleVertexAiRagFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGcsSource">PutGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGoogleDriveSource">PutGoogleDriveSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileParsingConfig">PutRagFileParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileTransformationConfig">PutRagFileTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetGcsSource">ResetGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetGoogleDriveSource">ResetGoogleDriveSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetMaxEmbeddingRequestsPerMin">ResetMaxEmbeddingRequestsPerMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetRagFileParsingConfig">ResetRagFileParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetRagFileTransformationConfig">ResetRagFileTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGcsSource` <a name="PutGcsSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGcsSource"></a>

```csharp
private void PutGcsSource(GoogleVertexAiRagFileGcsSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGcsSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a>

---

##### `PutGoogleDriveSource` <a name="PutGoogleDriveSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGoogleDriveSource"></a>

```csharp
private void PutGoogleDriveSource(GoogleVertexAiRagFileGoogleDriveSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGoogleDriveSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a>

---

##### `PutRagFileParsingConfig` <a name="PutRagFileParsingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileParsingConfig"></a>

```csharp
private void PutRagFileParsingConfig(GoogleVertexAiRagFileRagFileParsingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a>

---

##### `PutRagFileTransformationConfig` <a name="PutRagFileTransformationConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileTransformationConfig"></a>

```csharp
private void PutRagFileTransformationConfig(GoogleVertexAiRagFileRagFileTransformationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileTransformationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVertexAiRagFileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetGcsSource` <a name="ResetGcsSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetGcsSource"></a>

```csharp
private void ResetGcsSource()
```

##### `ResetGoogleDriveSource` <a name="ResetGoogleDriveSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetGoogleDriveSource"></a>

```csharp
private void ResetGoogleDriveSource()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxEmbeddingRequestsPerMin` <a name="ResetMaxEmbeddingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetMaxEmbeddingRequestsPerMin"></a>

```csharp
private void ResetMaxEmbeddingRequestsPerMin()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRagFileParsingConfig` <a name="ResetRagFileParsingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetRagFileParsingConfig"></a>

```csharp
private void ResetRagFileParsingConfig()
```

##### `ResetRagFileTransformationConfig` <a name="ResetRagFileTransformationConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetRagFileTransformationConfig"></a>

```csharp
private void ResetRagFileTransformationConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiRagFile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiRagFile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiRagFile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiRagFile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiRagFile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleVertexAiRagFile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiRagFile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiRagFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiRagFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.fileStatus">FileStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList">GoogleVertexAiRagFileFileStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.gcsSource">GcsSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference">GoogleVertexAiRagFileGcsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.googleDriveSource">GoogleDriveSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference">GoogleVertexAiRagFileGoogleDriveSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileParsingConfig">RagFileParsingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference">GoogleVertexAiRagFileRagFileParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileTransformationConfig">RagFileTransformationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference">GoogleVertexAiRagFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.userMetadata">UserMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.gcsSourceInput">GcsSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.googleDriveSourceInput">GoogleDriveSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.maxEmbeddingRequestsPerMinInput">MaxEmbeddingRequestsPerMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragCorpusInput">RagCorpusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileParsingConfigInput">RagFileParsingConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileTransformationConfigInput">RagFileTransformationConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.maxEmbeddingRequestsPerMin">MaxEmbeddingRequestsPerMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragCorpus">RagCorpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FileStatus`<sup>Required</sup> <a name="FileStatus" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.fileStatus"></a>

```csharp
public GoogleVertexAiRagFileFileStatusList FileStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList">GoogleVertexAiRagFileFileStatusList</a>

---

##### `GcsSource`<sup>Required</sup> <a name="GcsSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.gcsSource"></a>

```csharp
public GoogleVertexAiRagFileGcsSourceOutputReference GcsSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference">GoogleVertexAiRagFileGcsSourceOutputReference</a>

---

##### `GoogleDriveSource`<sup>Required</sup> <a name="GoogleDriveSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.googleDriveSource"></a>

```csharp
public GoogleVertexAiRagFileGoogleDriveSourceOutputReference GoogleDriveSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference">GoogleVertexAiRagFileGoogleDriveSourceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RagFileParsingConfig`<sup>Required</sup> <a name="RagFileParsingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileParsingConfig"></a>

```csharp
public GoogleVertexAiRagFileRagFileParsingConfigOutputReference RagFileParsingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference">GoogleVertexAiRagFileRagFileParsingConfigOutputReference</a>

---

##### `RagFileTransformationConfig`<sup>Required</sup> <a name="RagFileTransformationConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileTransformationConfig"></a>

```csharp
public GoogleVertexAiRagFileRagFileTransformationConfigOutputReference RagFileTransformationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.timeouts"></a>

```csharp
public GoogleVertexAiRagFileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference">GoogleVertexAiRagFileTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `UserMetadata`<sup>Required</sup> <a name="UserMetadata" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.userMetadata"></a>

```csharp
public string UserMetadata { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `GcsSourceInput`<sup>Optional</sup> <a name="GcsSourceInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.gcsSourceInput"></a>

```csharp
public GoogleVertexAiRagFileGcsSource GcsSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a>

---

##### `GoogleDriveSourceInput`<sup>Optional</sup> <a name="GoogleDriveSourceInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.googleDriveSourceInput"></a>

```csharp
public GoogleVertexAiRagFileGoogleDriveSource GoogleDriveSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxEmbeddingRequestsPerMinInput`<sup>Optional</sup> <a name="MaxEmbeddingRequestsPerMinInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.maxEmbeddingRequestsPerMinInput"></a>

```csharp
public double MaxEmbeddingRequestsPerMinInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RagCorpusInput`<sup>Optional</sup> <a name="RagCorpusInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragCorpusInput"></a>

```csharp
public string RagCorpusInput { get; }
```

- *Type:* string

---

##### `RagFileParsingConfigInput`<sup>Optional</sup> <a name="RagFileParsingConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileParsingConfigInput"></a>

```csharp
public GoogleVertexAiRagFileRagFileParsingConfig RagFileParsingConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a>

---

##### `RagFileTransformationConfigInput`<sup>Optional</sup> <a name="RagFileTransformationConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileTransformationConfigInput"></a>

```csharp
public GoogleVertexAiRagFileRagFileTransformationConfig RagFileTransformationConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleVertexAiRagFileTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxEmbeddingRequestsPerMin`<sup>Required</sup> <a name="MaxEmbeddingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.maxEmbeddingRequestsPerMin"></a>

```csharp
public double MaxEmbeddingRequestsPerMin { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RagCorpus`<sup>Required</sup> <a name="RagCorpus" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragCorpus"></a>

```csharp
public string RagCorpus { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiRagFileConfig <a name="GoogleVertexAiRagFileConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RagCorpus,
    string Region,
    string DeletionPolicy = null,
    GoogleVertexAiRagFileGcsSource GcsSource = null,
    GoogleVertexAiRagFileGoogleDriveSource GoogleDriveSource = null,
    string Id = null,
    double MaxEmbeddingRequestsPerMin = null,
    string Project = null,
    GoogleVertexAiRagFileRagFileParsingConfig RagFileParsingConfig = null,
    GoogleVertexAiRagFileRagFileTransformationConfig RagFileTransformationConfig = null,
    GoogleVertexAiRagFileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragCorpus">RagCorpus</a></code> | <code>string</code> | The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.region">Region</a></code> | <code>string</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.gcsSource">GcsSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a></code> | gcs_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.googleDriveSource">GoogleDriveSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a></code> | google_drive_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#id GoogleVertexAiRagFile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.maxEmbeddingRequestsPerMin">MaxEmbeddingRequestsPerMin</a></code> | <code>double</code> | The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#project GoogleVertexAiRagFile#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragFileParsingConfig">RagFileParsingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a></code> | rag_file_parsing_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragFileTransformationConfig">RagFileTransformationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a></code> | rag_file_transformation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RagCorpus`<sup>Required</sup> <a name="RagCorpus" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragCorpus"></a>

```csharp
public string RagCorpus { get; set; }
```

- *Type:* string

The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_corpus GoogleVertexAiRagFile#rag_corpus}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#region GoogleVertexAiRagFile#region}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#deletion_policy GoogleVertexAiRagFile#deletion_policy}

---

##### `GcsSource`<sup>Optional</sup> <a name="GcsSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.gcsSource"></a>

```csharp
public GoogleVertexAiRagFileGcsSource GcsSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a>

gcs_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#gcs_source GoogleVertexAiRagFile#gcs_source}

---

##### `GoogleDriveSource`<sup>Optional</sup> <a name="GoogleDriveSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.googleDriveSource"></a>

```csharp
public GoogleVertexAiRagFileGoogleDriveSource GoogleDriveSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a>

google_drive_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#google_drive_source GoogleVertexAiRagFile#google_drive_source}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#id GoogleVertexAiRagFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxEmbeddingRequestsPerMin`<sup>Optional</sup> <a name="MaxEmbeddingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.maxEmbeddingRequestsPerMin"></a>

```csharp
public double MaxEmbeddingRequestsPerMin { get; set; }
```

- *Type:* double

The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#max_embedding_requests_per_min GoogleVertexAiRagFile#max_embedding_requests_per_min}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#project GoogleVertexAiRagFile#project}.

---

##### `RagFileParsingConfig`<sup>Optional</sup> <a name="RagFileParsingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragFileParsingConfig"></a>

```csharp
public GoogleVertexAiRagFileRagFileParsingConfig RagFileParsingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a>

rag_file_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_file_parsing_config GoogleVertexAiRagFile#rag_file_parsing_config}

---

##### `RagFileTransformationConfig`<sup>Optional</sup> <a name="RagFileTransformationConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragFileTransformationConfig"></a>

```csharp
public GoogleVertexAiRagFileRagFileTransformationConfig RagFileTransformationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a>

rag_file_transformation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_file_transformation_config GoogleVertexAiRagFile#rag_file_transformation_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.timeouts"></a>

```csharp
public GoogleVertexAiRagFileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#timeouts GoogleVertexAiRagFile#timeouts}

---

### GoogleVertexAiRagFileFileStatus <a name="GoogleVertexAiRagFileFileStatus" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileFileStatus {

};
```


### GoogleVertexAiRagFileGcsSource <a name="GoogleVertexAiRagFileGcsSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileGcsSource {
    string[] Uris
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource.property.uris">Uris</a></code> | <code>string[]</code> | The Cloud Storage URI of the file to import, for example 'gs://my-bucket/my-file.pdf'. Must reference a single file; directories and wildcards are not supported because each resource manages one RagFile. |

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource.property.uris"></a>

```csharp
public string[] Uris { get; set; }
```

- *Type:* string[]

The Cloud Storage URI of the file to import, for example 'gs://my-bucket/my-file.pdf'. Must reference a single file; directories and wildcards are not supported because each resource manages one RagFile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#uris GoogleVertexAiRagFile#uris}

---

### GoogleVertexAiRagFileGoogleDriveSource <a name="GoogleVertexAiRagFileGoogleDriveSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileGoogleDriveSource {
    GoogleVertexAiRagFileGoogleDriveSourceResourceIds ResourceIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource.property.resourceIds">ResourceIds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a></code> | resource_ids block. |

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource.property.resourceIds"></a>

```csharp
public GoogleVertexAiRagFileGoogleDriveSourceResourceIds ResourceIds { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a>

resource_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#resource_ids GoogleVertexAiRagFile#resource_ids}

---

### GoogleVertexAiRagFileGoogleDriveSourceResourceIds <a name="GoogleVertexAiRagFileGoogleDriveSourceResourceIds" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileGoogleDriveSourceResourceIds {
    string ResourceId,
    string ResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds.property.resourceId">ResourceId</a></code> | <code>string</code> | The ID of the Google Drive file. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds.property.resourceType">ResourceType</a></code> | <code>string</code> | The type of the Google Drive resource. |

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

The ID of the Google Drive file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#resource_id GoogleVertexAiRagFile#resource_id}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

The type of the Google Drive resource.

Only individual files are
supported because each resource manages one RagFile. Default value: "RESOURCE_TYPE_FILE" Possible values: ["RESOURCE_TYPE_FILE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#resource_type GoogleVertexAiRagFile#resource_type}

---

### GoogleVertexAiRagFileRagFileParsingConfig <a name="GoogleVertexAiRagFileRagFileParsingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileRagFileParsingConfig {
    GoogleVertexAiRagFileRagFileParsingConfigLayoutParser LayoutParser = null,
    GoogleVertexAiRagFileRagFileParsingConfigLlmParser LlmParser = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig.property.layoutParser">LayoutParser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a></code> | layout_parser block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig.property.llmParser">LlmParser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a></code> | llm_parser block. |

---

##### `LayoutParser`<sup>Optional</sup> <a name="LayoutParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig.property.layoutParser"></a>

```csharp
public GoogleVertexAiRagFileRagFileParsingConfigLayoutParser LayoutParser { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a>

layout_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#layout_parser GoogleVertexAiRagFile#layout_parser}

---

##### `LlmParser`<sup>Optional</sup> <a name="LlmParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig.property.llmParser"></a>

```csharp
public GoogleVertexAiRagFileRagFileParsingConfigLlmParser LlmParser { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a>

llm_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#llm_parser GoogleVertexAiRagFile#llm_parser}

---

### GoogleVertexAiRagFileRagFileParsingConfigLayoutParser <a name="GoogleVertexAiRagFileRagFileParsingConfigLayoutParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileRagFileParsingConfigLayoutParser {
    double MaxParsingRequestsPerMin = null,
    string ProcessorName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.property.maxParsingRequestsPerMin">MaxParsingRequestsPerMin</a></code> | <code>double</code> | The maximum number of requests the job is allowed to make to the Document AI processor per minute. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.property.processorName">ProcessorName</a></code> | <code>string</code> | The full resource name of a Document AI processor or processor version of type 'LAYOUT_PARSER_PROCESSOR'. Format: 'projects/{project_id}/locations/{location}/processors/{processor_id}' or 'projects/{project_id}/locations/{location}/processors/{processor_id}/processorVersions/{processor_version_id}'. |

---

##### `MaxParsingRequestsPerMin`<sup>Optional</sup> <a name="MaxParsingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.property.maxParsingRequestsPerMin"></a>

```csharp
public double MaxParsingRequestsPerMin { get; set; }
```

- *Type:* double

The maximum number of requests the job is allowed to make to the Document AI processor per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#max_parsing_requests_per_min GoogleVertexAiRagFile#max_parsing_requests_per_min}

---

##### `ProcessorName`<sup>Optional</sup> <a name="ProcessorName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.property.processorName"></a>

```csharp
public string ProcessorName { get; set; }
```

- *Type:* string

The full resource name of a Document AI processor or processor version of type 'LAYOUT_PARSER_PROCESSOR'. Format: 'projects/{project_id}/locations/{location}/processors/{processor_id}' or 'projects/{project_id}/locations/{location}/processors/{processor_id}/processorVersions/{processor_version_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#processor_name GoogleVertexAiRagFile#processor_name}

---

### GoogleVertexAiRagFileRagFileParsingConfigLlmParser <a name="GoogleVertexAiRagFileRagFileParsingConfigLlmParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileRagFileParsingConfigLlmParser {
    string CustomParsingPrompt = null,
    double MaxParsingRequestsPerMin = null,
    string ModelName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.customParsingPrompt">CustomParsingPrompt</a></code> | <code>string</code> | The prompt to use for parsing. If not specified, a default prompt is used. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.maxParsingRequestsPerMin">MaxParsingRequestsPerMin</a></code> | <code>double</code> | The maximum number of requests the job is allowed to make to the LLM model per minute. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.modelName">ModelName</a></code> | <code>string</code> | The name of a LLM model used for parsing. Format: 'projects/{project_id}/locations/{location}/publishers/{publisher}/models/{model}'. |

---

##### `CustomParsingPrompt`<sup>Optional</sup> <a name="CustomParsingPrompt" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.customParsingPrompt"></a>

```csharp
public string CustomParsingPrompt { get; set; }
```

- *Type:* string

The prompt to use for parsing. If not specified, a default prompt is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#custom_parsing_prompt GoogleVertexAiRagFile#custom_parsing_prompt}

---

##### `MaxParsingRequestsPerMin`<sup>Optional</sup> <a name="MaxParsingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.maxParsingRequestsPerMin"></a>

```csharp
public double MaxParsingRequestsPerMin { get; set; }
```

- *Type:* double

The maximum number of requests the job is allowed to make to the LLM model per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#max_parsing_requests_per_min GoogleVertexAiRagFile#max_parsing_requests_per_min}

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.modelName"></a>

```csharp
public string ModelName { get; set; }
```

- *Type:* string

The name of a LLM model used for parsing. Format: 'projects/{project_id}/locations/{location}/publishers/{publisher}/models/{model}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#model_name GoogleVertexAiRagFile#model_name}

---

### GoogleVertexAiRagFileRagFileTransformationConfig <a name="GoogleVertexAiRagFileRagFileTransformationConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileRagFileTransformationConfig {
    GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig RagFileChunkingConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig.property.ragFileChunkingConfig">RagFileChunkingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a></code> | rag_file_chunking_config block. |

---

##### `RagFileChunkingConfig`<sup>Optional</sup> <a name="RagFileChunkingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig.property.ragFileChunkingConfig"></a>

```csharp
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig RagFileChunkingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

rag_file_chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_file_chunking_config GoogleVertexAiRagFile#rag_file_chunking_config}

---

### GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig <a name="GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig {
    GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking FixedLengthChunking = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.property.fixedLengthChunking">FixedLengthChunking</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a></code> | fixed_length_chunking block. |

---

##### `FixedLengthChunking`<sup>Optional</sup> <a name="FixedLengthChunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.property.fixedLengthChunking"></a>

```csharp
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking FixedLengthChunking { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

fixed_length_chunking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#fixed_length_chunking GoogleVertexAiRagFile#fixed_length_chunking}

---

### GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking <a name="GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking {
    double ChunkOverlap = null,
    double ChunkSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkOverlap">ChunkOverlap</a></code> | <code>double</code> | The overlap between chunks. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkSize">ChunkSize</a></code> | <code>double</code> | The size of the chunks. |

---

##### `ChunkOverlap`<sup>Optional</sup> <a name="ChunkOverlap" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkOverlap"></a>

```csharp
public double ChunkOverlap { get; set; }
```

- *Type:* double

The overlap between chunks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#chunk_overlap GoogleVertexAiRagFile#chunk_overlap}

---

##### `ChunkSize`<sup>Optional</sup> <a name="ChunkSize" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkSize"></a>

```csharp
public double ChunkSize { get; set; }
```

- *Type:* double

The size of the chunks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#chunk_size GoogleVertexAiRagFile#chunk_size}

---

### GoogleVertexAiRagFileTimeouts <a name="GoogleVertexAiRagFileTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#create GoogleVertexAiRagFile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#delete GoogleVertexAiRagFile#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#create GoogleVertexAiRagFile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#delete GoogleVertexAiRagFile#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiRagFileFileStatusList <a name="GoogleVertexAiRagFileFileStatusList" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileFileStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.get"></a>

```csharp
private GoogleVertexAiRagFileFileStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiRagFileFileStatusOutputReference <a name="GoogleVertexAiRagFileFileStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileFileStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.errorStatus">ErrorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatus">GoogleVertexAiRagFileFileStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorStatus`<sup>Required</sup> <a name="ErrorStatus" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.errorStatus"></a>

```csharp
public string ErrorStatus { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagFileFileStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatus">GoogleVertexAiRagFileFileStatus</a>

---


### GoogleVertexAiRagFileGcsSourceOutputReference <a name="GoogleVertexAiRagFileGcsSourceOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileGcsSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.urisInput">UrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.uris">Uris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UrisInput`<sup>Optional</sup> <a name="UrisInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.urisInput"></a>

```csharp
public string[] UrisInput { get; }
```

- *Type:* string[]

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.uris"></a>

```csharp
public string[] Uris { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagFileGcsSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a>

---


### GoogleVertexAiRagFileGoogleDriveSourceOutputReference <a name="GoogleVertexAiRagFileGoogleDriveSourceOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileGoogleDriveSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds">PutResourceIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceIds` <a name="PutResourceIds" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds"></a>

```csharp
private void PutResourceIds(GoogleVertexAiRagFileGoogleDriveSourceResourceIds Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIds">ResourceIds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference">GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIdsInput">ResourceIdsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIds"></a>

```csharp
public GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference ResourceIds { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference">GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference</a>

---

##### `ResourceIdsInput`<sup>Optional</sup> <a name="ResourceIdsInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIdsInput"></a>

```csharp
public GoogleVertexAiRagFileGoogleDriveSourceResourceIds ResourceIdsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagFileGoogleDriveSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a>

---


### GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference <a name="GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagFileGoogleDriveSourceResourceIds InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a>

---


### GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference <a name="GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetMaxParsingRequestsPerMin">ResetMaxParsingRequestsPerMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetProcessorName">ResetProcessorName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxParsingRequestsPerMin` <a name="ResetMaxParsingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetMaxParsingRequestsPerMin"></a>

```csharp
private void ResetMaxParsingRequestsPerMin()
```

##### `ResetProcessorName` <a name="ResetProcessorName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetProcessorName"></a>

```csharp
private void ResetProcessorName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMinInput">MaxParsingRequestsPerMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorNameInput">ProcessorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMin">MaxParsingRequestsPerMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorName">ProcessorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxParsingRequestsPerMinInput`<sup>Optional</sup> <a name="MaxParsingRequestsPerMinInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMinInput"></a>

```csharp
public double MaxParsingRequestsPerMinInput { get; }
```

- *Type:* double

---

##### `ProcessorNameInput`<sup>Optional</sup> <a name="ProcessorNameInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorNameInput"></a>

```csharp
public string ProcessorNameInput { get; }
```

- *Type:* string

---

##### `MaxParsingRequestsPerMin`<sup>Required</sup> <a name="MaxParsingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMin"></a>

```csharp
public double MaxParsingRequestsPerMin { get; }
```

- *Type:* double

---

##### `ProcessorName`<sup>Required</sup> <a name="ProcessorName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorName"></a>

```csharp
public string ProcessorName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagFileRagFileParsingConfigLayoutParser InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a>

---


### GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference <a name="GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetCustomParsingPrompt">ResetCustomParsingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetMaxParsingRequestsPerMin">ResetMaxParsingRequestsPerMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetModelName">ResetModelName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomParsingPrompt` <a name="ResetCustomParsingPrompt" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetCustomParsingPrompt"></a>

```csharp
private void ResetCustomParsingPrompt()
```

##### `ResetMaxParsingRequestsPerMin` <a name="ResetMaxParsingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetMaxParsingRequestsPerMin"></a>

```csharp
private void ResetMaxParsingRequestsPerMin()
```

##### `ResetModelName` <a name="ResetModelName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetModelName"></a>

```csharp
private void ResetModelName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPromptInput">CustomParsingPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMinInput">MaxParsingRequestsPerMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPrompt">CustomParsingPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMin">MaxParsingRequestsPerMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomParsingPromptInput`<sup>Optional</sup> <a name="CustomParsingPromptInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPromptInput"></a>

```csharp
public string CustomParsingPromptInput { get; }
```

- *Type:* string

---

##### `MaxParsingRequestsPerMinInput`<sup>Optional</sup> <a name="MaxParsingRequestsPerMinInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMinInput"></a>

```csharp
public double MaxParsingRequestsPerMinInput { get; }
```

- *Type:* double

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelNameInput"></a>

```csharp
public string ModelNameInput { get; }
```

- *Type:* string

---

##### `CustomParsingPrompt`<sup>Required</sup> <a name="CustomParsingPrompt" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPrompt"></a>

```csharp
public string CustomParsingPrompt { get; }
```

- *Type:* string

---

##### `MaxParsingRequestsPerMin`<sup>Required</sup> <a name="MaxParsingRequestsPerMin" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMin"></a>

```csharp
public double MaxParsingRequestsPerMin { get; }
```

- *Type:* double

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagFileRagFileParsingConfigLlmParser InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a>

---


### GoogleVertexAiRagFileRagFileParsingConfigOutputReference <a name="GoogleVertexAiRagFileRagFileParsingConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileRagFileParsingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser">PutLayoutParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser">PutLlmParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resetLayoutParser">ResetLayoutParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resetLlmParser">ResetLlmParser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLayoutParser` <a name="PutLayoutParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser"></a>

```csharp
private void PutLayoutParser(GoogleVertexAiRagFileRagFileParsingConfigLayoutParser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a>

---

##### `PutLlmParser` <a name="PutLlmParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser"></a>

```csharp
private void PutLlmParser(GoogleVertexAiRagFileRagFileParsingConfigLlmParser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a>

---

##### `ResetLayoutParser` <a name="ResetLayoutParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resetLayoutParser"></a>

```csharp
private void ResetLayoutParser()
```

##### `ResetLlmParser` <a name="ResetLlmParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resetLlmParser"></a>

```csharp
private void ResetLlmParser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParser">LayoutParser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference">GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.llmParser">LlmParser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference">GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParserInput">LayoutParserInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.llmParserInput">LlmParserInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LayoutParser`<sup>Required</sup> <a name="LayoutParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParser"></a>

```csharp
public GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference LayoutParser { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference">GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference</a>

---

##### `LlmParser`<sup>Required</sup> <a name="LlmParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.llmParser"></a>

```csharp
public GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference LlmParser { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference">GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference</a>

---

##### `LayoutParserInput`<sup>Optional</sup> <a name="LayoutParserInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParserInput"></a>

```csharp
public GoogleVertexAiRagFileRagFileParsingConfigLayoutParser LayoutParserInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a>

---

##### `LlmParserInput`<sup>Optional</sup> <a name="LlmParserInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.llmParserInput"></a>

```csharp
public GoogleVertexAiRagFileRagFileParsingConfigLlmParser LlmParserInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagFileRagFileParsingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a>

---


### GoogleVertexAiRagFileRagFileTransformationConfigOutputReference <a name="GoogleVertexAiRagFileRagFileTransformationConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileRagFileTransformationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.putRagFileChunkingConfig">PutRagFileChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.resetRagFileChunkingConfig">ResetRagFileChunkingConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRagFileChunkingConfig` <a name="PutRagFileChunkingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.putRagFileChunkingConfig"></a>

```csharp
private void PutRagFileChunkingConfig(GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.putRagFileChunkingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

---

##### `ResetRagFileChunkingConfig` <a name="ResetRagFileChunkingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.resetRagFileChunkingConfig"></a>

```csharp
private void ResetRagFileChunkingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfig">RagFileChunkingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfigInput">RagFileChunkingConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RagFileChunkingConfig`<sup>Required</sup> <a name="RagFileChunkingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfig"></a>

```csharp
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference RagFileChunkingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference</a>

---

##### `RagFileChunkingConfigInput`<sup>Optional</sup> <a name="RagFileChunkingConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfigInput"></a>

```csharp
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig RagFileChunkingConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagFileRagFileTransformationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a>

---


### GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference <a name="GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkOverlap">ResetChunkOverlap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkSize">ResetChunkSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChunkOverlap` <a name="ResetChunkOverlap" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkOverlap"></a>

```csharp
private void ResetChunkOverlap()
```

##### `ResetChunkSize` <a name="ResetChunkSize" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkSize"></a>

```csharp
private void ResetChunkSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlapInput">ChunkOverlapInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSizeInput">ChunkSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlap">ChunkOverlap</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSize">ChunkSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChunkOverlapInput`<sup>Optional</sup> <a name="ChunkOverlapInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlapInput"></a>

```csharp
public double ChunkOverlapInput { get; }
```

- *Type:* double

---

##### `ChunkSizeInput`<sup>Optional</sup> <a name="ChunkSizeInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSizeInput"></a>

```csharp
public double ChunkSizeInput { get; }
```

- *Type:* double

---

##### `ChunkOverlap`<sup>Required</sup> <a name="ChunkOverlap" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlap"></a>

```csharp
public double ChunkOverlap { get; }
```

- *Type:* double

---

##### `ChunkSize`<sup>Required</sup> <a name="ChunkSize" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSize"></a>

```csharp
public double ChunkSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

---


### GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference <a name="GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking">PutFixedLengthChunking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resetFixedLengthChunking">ResetFixedLengthChunking</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFixedLengthChunking` <a name="PutFixedLengthChunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking"></a>

```csharp
private void PutFixedLengthChunking(GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

---

##### `ResetFixedLengthChunking` <a name="ResetFixedLengthChunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resetFixedLengthChunking"></a>

```csharp
private void ResetFixedLengthChunking()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunking">FixedLengthChunking</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunkingInput">FixedLengthChunkingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedLengthChunking`<sup>Required</sup> <a name="FixedLengthChunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunking"></a>

```csharp
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference FixedLengthChunking { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference</a>

---

##### `FixedLengthChunkingInput`<sup>Optional</sup> <a name="FixedLengthChunkingInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunkingInput"></a>

```csharp
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking FixedLengthChunkingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

---


### GoogleVertexAiRagFileTimeoutsOutputReference <a name="GoogleVertexAiRagFileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagFileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiRagFileTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a>

---



