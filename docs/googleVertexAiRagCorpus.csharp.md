# `googleVertexAiRagCorpus` Submodule <a name="`googleVertexAiRagCorpus` Submodule" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiRagCorpus <a name="GoogleVertexAiRagCorpus" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus google_vertex_ai_rag_corpus}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpus(Construct Scope, string Id, GoogleVertexAiRagCorpusConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig">GoogleVertexAiRagCorpusConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig">GoogleVertexAiRagCorpusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig">PutVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVertexAiSearchConfig">PutVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVectorDbConfig">ResetVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVertexAiSearchConfig">ResetVertexAiSearchConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(GoogleVertexAiRagCorpusEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVertexAiRagCorpusTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a>

---

##### `PutVectorDbConfig` <a name="PutVectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig"></a>

```csharp
private void PutVectorDbConfig(GoogleVertexAiRagCorpusVectorDbConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

---

##### `PutVertexAiSearchConfig` <a name="PutVertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVertexAiSearchConfig"></a>

```csharp
private void PutVertexAiSearchConfig(GoogleVertexAiRagCorpusVertexAiSearchConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVertexAiSearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVectorDbConfig` <a name="ResetVectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVectorDbConfig"></a>

```csharp
private void ResetVectorDbConfig()
```

##### `ResetVertexAiSearchConfig` <a name="ResetVertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVertexAiSearchConfig"></a>

```csharp
private void ResetVertexAiSearchConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiRagCorpus resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiRagCorpus.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiRagCorpus.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiRagCorpus.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiRagCorpus.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleVertexAiRagCorpus resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiRagCorpus to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiRagCorpus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiRagCorpus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.corpusStatus">CorpusStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList">GoogleVertexAiRagCorpusCorpusStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference">GoogleVertexAiRagCorpusEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference">GoogleVertexAiRagCorpusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfig">VectorDbConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfig">VertexAiSearchConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference">GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfigInput">VectorDbConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfigInput">VertexAiSearchConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CorpusStatus`<sup>Required</sup> <a name="CorpusStatus" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.corpusStatus"></a>

```csharp
public GoogleVertexAiRagCorpusCorpusStatusList CorpusStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList">GoogleVertexAiRagCorpusCorpusStatusList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiRagCorpusEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference">GoogleVertexAiRagCorpusEncryptionSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeouts"></a>

```csharp
public GoogleVertexAiRagCorpusTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference">GoogleVertexAiRagCorpusTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `VectorDbConfig`<sup>Required</sup> <a name="VectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfig"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigOutputReference VectorDbConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigOutputReference</a>

---

##### `VertexAiSearchConfig`<sup>Required</sup> <a name="VertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfig"></a>

```csharp
public GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference VertexAiSearchConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference">GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpecInput"></a>

```csharp
public GoogleVertexAiRagCorpusEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleVertexAiRagCorpusTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a>

---

##### `VectorDbConfigInput`<sup>Optional</sup> <a name="VectorDbConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfigInput"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfig VectorDbConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

---

##### `VertexAiSearchConfigInput`<sup>Optional</sup> <a name="VertexAiSearchConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfigInput"></a>

```csharp
public GoogleVertexAiRagCorpusVertexAiSearchConfig VertexAiSearchConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiRagCorpusConfig <a name="GoogleVertexAiRagCorpusConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusConfig {
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
    GoogleVertexAiRagCorpusEncryptionSpec EncryptionSpec = null,
    string Id = null,
    string Project = null,
    GoogleVertexAiRagCorpusTimeouts Timeouts = null,
    GoogleVertexAiRagCorpusVectorDbConfig VectorDbConfig = null,
    GoogleVertexAiRagCorpusVertexAiSearchConfig VertexAiSearchConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.region">Region</a></code> | <code>string</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.description">Description</a></code> | <code>string</code> | Optional. The description of the RagCorpus. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#id GoogleVertexAiRagCorpus#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#project GoogleVertexAiRagCorpus#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vectorDbConfig">VectorDbConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a></code> | vector_db_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vertexAiSearchConfig">VertexAiSearchConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a></code> | vertex_ai_search_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Required.

The display name of the RagCorpus. The name can be up to 128
characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#display_name GoogleVertexAiRagCorpus#display_name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#region GoogleVertexAiRagCorpus#region}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#deletion_policy GoogleVertexAiRagCorpus#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. The description of the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#description GoogleVertexAiRagCorpus#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiRagCorpusEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#encryption_spec GoogleVertexAiRagCorpus#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#id GoogleVertexAiRagCorpus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#project GoogleVertexAiRagCorpus#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.timeouts"></a>

```csharp
public GoogleVertexAiRagCorpusTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#timeouts GoogleVertexAiRagCorpus#timeouts}

---

##### `VectorDbConfig`<sup>Optional</sup> <a name="VectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vectorDbConfig"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfig VectorDbConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

vector_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vector_db_config GoogleVertexAiRagCorpus#vector_db_config}

---

##### `VertexAiSearchConfig`<sup>Optional</sup> <a name="VertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vertexAiSearchConfig"></a>

```csharp
public GoogleVertexAiRagCorpusVertexAiSearchConfig VertexAiSearchConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

vertex_ai_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vertex_ai_search_config GoogleVertexAiRagCorpus#vertex_ai_search_config}

---

### GoogleVertexAiRagCorpusCorpusStatus <a name="GoogleVertexAiRagCorpusCorpusStatus" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusCorpusStatus {

};
```


### GoogleVertexAiRagCorpusEncryptionSpec <a name="GoogleVertexAiRagCorpusEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Required. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Required.

The Cloud KMS resource identifier of the customer managed
encryption key used to protect the resource. Has the form:
projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
The key needs to be in the same region as where the resource is
created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#kms_key_name GoogleVertexAiRagCorpus#kms_key_name}

---

### GoogleVertexAiRagCorpusTimeouts <a name="GoogleVertexAiRagCorpusTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#create GoogleVertexAiRagCorpus#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#delete GoogleVertexAiRagCorpus#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#update GoogleVertexAiRagCorpus#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#create GoogleVertexAiRagCorpus#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#delete GoogleVertexAiRagCorpus#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#update GoogleVertexAiRagCorpus#update}.

---

### GoogleVertexAiRagCorpusVectorDbConfig <a name="GoogleVertexAiRagCorpusVectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfig {
    GoogleVertexAiRagCorpusVectorDbConfigApiAuth ApiAuth = null,
    GoogleVertexAiRagCorpusVectorDbConfigPinecone Pinecone = null,
    GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig RagEmbeddingModelConfig = null,
    GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb RagManagedDb = null,
    GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch VertexVectorSearch = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.apiAuth">ApiAuth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a></code> | api_auth block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.pinecone">Pinecone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a></code> | pinecone block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig">RagEmbeddingModelConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | rag_embedding_model_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragManagedDb">RagManagedDb</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | rag_managed_db block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch">VertexVectorSearch</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | vertex_vector_search block. |

---

##### `ApiAuth`<sup>Optional</sup> <a name="ApiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.apiAuth"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigApiAuth ApiAuth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

api_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_auth GoogleVertexAiRagCorpus#api_auth}

---

##### `Pinecone`<sup>Optional</sup> <a name="Pinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.pinecone"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigPinecone Pinecone { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

pinecone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#pinecone GoogleVertexAiRagCorpus#pinecone}

---

##### `RagEmbeddingModelConfig`<sup>Optional</sup> <a name="RagEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig RagEmbeddingModelConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

rag_embedding_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#rag_embedding_model_config GoogleVertexAiRagCorpus#rag_embedding_model_config}

---

##### `RagManagedDb`<sup>Optional</sup> <a name="RagManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragManagedDb"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb RagManagedDb { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

rag_managed_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#rag_managed_db GoogleVertexAiRagCorpus#rag_managed_db}

---

##### `VertexVectorSearch`<sup>Optional</sup> <a name="VertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch VertexVectorSearch { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

vertex_vector_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vertex_vector_search GoogleVertexAiRagCorpus#vertex_vector_search}

---

### GoogleVertexAiRagCorpusVectorDbConfigApiAuth <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigApiAuth {
    GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig ApiKeyConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | api_key_config block. |

---

##### `ApiKeyConfig`<sup>Optional</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig ApiKeyConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_key_config GoogleVertexAiRagCorpus#api_key_config}

---

### GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig {
    string ApiKeySecretVersion = null,
    string ApiKeyString = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>string</code> | The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString">ApiKeyString</a></code> | <code>string</code> | The API key string. |

---

##### `ApiKeySecretVersion`<sup>Optional</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion"></a>

```csharp
public string ApiKeySecretVersion { get; set; }
```

- *Type:* string

The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_key_secret_version GoogleVertexAiRagCorpus#api_key_secret_version}

---

##### `ApiKeyString`<sup>Optional</sup> <a name="ApiKeyString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString"></a>

```csharp
public string ApiKeyString { get; set; }
```

- *Type:* string

The API key string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_key_string GoogleVertexAiRagCorpus#api_key_string}

---

### GoogleVertexAiRagCorpusVectorDbConfigPinecone <a name="GoogleVertexAiRagCorpusVectorDbConfigPinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigPinecone {
    string IndexName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone.property.indexName">IndexName</a></code> | <code>string</code> | Pinecone index name. This value cannot be changed after it's set. |

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone.property.indexName"></a>

```csharp
public string IndexName { get; set; }
```

- *Type:* string

Pinecone index name. This value cannot be changed after it's set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#index_name GoogleVertexAiRagCorpus#index_name}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig {
    GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint VertexPredictionEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint">VertexPredictionEndpoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | vertex_prediction_endpoint block. |

---

##### `VertexPredictionEndpoint`<sup>Optional</sup> <a name="VertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint VertexPredictionEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

vertex_prediction_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vertex_prediction_endpoint GoogleVertexAiRagCorpus#vertex_prediction_endpoint}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint {
    string Endpoint
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint">Endpoint</a></code> | <code>string</code> | Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}. |

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#endpoint GoogleVertexAiRagCorpus#endpoint}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb {
    GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn Ann = null,
    GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn Knn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann">Ann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | ann block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn">Knn</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | knn block. |

---

##### `Ann`<sup>Optional</sup> <a name="Ann" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn Ann { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

ann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#ann GoogleVertexAiRagCorpus#ann}

---

##### `Knn`<sup>Optional</sup> <a name="Knn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn Knn { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

knn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#knn GoogleVertexAiRagCorpus#knn}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn {
    double LeafCount = null,
    double TreeDepth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount">LeafCount</a></code> | <code>double</code> | Number of leaf nodes in the tree-based structure. Default value is 500. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth">TreeDepth</a></code> | <code>double</code> | The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2. |

---

##### `LeafCount`<sup>Optional</sup> <a name="LeafCount" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount"></a>

```csharp
public double LeafCount { get; set; }
```

- *Type:* double

Number of leaf nodes in the tree-based structure. Default value is 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#leaf_count GoogleVertexAiRagCorpus#leaf_count}

---

##### `TreeDepth`<sup>Optional</sup> <a name="TreeDepth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth"></a>

```csharp
public double TreeDepth { get; set; }
```

- *Type:* double

The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#tree_depth GoogleVertexAiRagCorpus#tree_depth}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn {

};
```


### GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch <a name="GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch {
    string Index,
    string IndexEndpoint
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index">Index</a></code> | <code>string</code> | The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint">IndexEndpoint</a></code> | <code>string</code> | The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}. |

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index"></a>

```csharp
public string Index { get; set; }
```

- *Type:* string

The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#index GoogleVertexAiRagCorpus#index}

---

##### `IndexEndpoint`<sup>Required</sup> <a name="IndexEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint"></a>

```csharp
public string IndexEndpoint { get; set; }
```

- *Type:* string

The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#index_endpoint GoogleVertexAiRagCorpus#index_endpoint}

---

### GoogleVertexAiRagCorpusVertexAiSearchConfig <a name="GoogleVertexAiRagCorpusVertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVertexAiSearchConfig {
    string ServingConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig.property.servingConfig">ServingConfig</a></code> | <code>string</code> | Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}. |

---

##### `ServingConfig`<sup>Required</sup> <a name="ServingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig.property.servingConfig"></a>

```csharp
public string ServingConfig { get; set; }
```

- *Type:* string

Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#serving_config GoogleVertexAiRagCorpus#serving_config}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiRagCorpusCorpusStatusList <a name="GoogleVertexAiRagCorpusCorpusStatusList" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusCorpusStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.get"></a>

```csharp
private GoogleVertexAiRagCorpusCorpusStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiRagCorpusCorpusStatusOutputReference <a name="GoogleVertexAiRagCorpusCorpusStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusCorpusStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus">ErrorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus">GoogleVertexAiRagCorpusCorpusStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorStatus`<sup>Required</sup> <a name="ErrorStatus" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus"></a>

```csharp
public string ErrorStatus { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagCorpusCorpusStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus">GoogleVertexAiRagCorpusCorpusStatus</a>

---


### GoogleVertexAiRagCorpusEncryptionSpecOutputReference <a name="GoogleVertexAiRagCorpusEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagCorpusEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

---


### GoogleVertexAiRagCorpusTimeoutsOutputReference <a name="GoogleVertexAiRagCorpusTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiRagCorpusTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion">ResetApiKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString">ResetApiKeyString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKeySecretVersion` <a name="ResetApiKeySecretVersion" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion"></a>

```csharp
private void ResetApiKeySecretVersion()
```

##### `ResetApiKeyString` <a name="ResetApiKeyString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString"></a>

```csharp
private void ResetApiKeyString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput">ApiKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput">ApiKeyStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString">ApiKeyString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeySecretVersionInput`<sup>Optional</sup> <a name="ApiKeySecretVersionInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```csharp
public string ApiKeySecretVersionInput { get; }
```

- *Type:* string

---

##### `ApiKeyStringInput`<sup>Optional</sup> <a name="ApiKeyStringInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput"></a>

```csharp
public string ApiKeyStringInput { get; }
```

- *Type:* string

---

##### `ApiKeySecretVersion`<sup>Required</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```csharp
public string ApiKeySecretVersion { get; }
```

- *Type:* string

---

##### `ApiKeyString`<sup>Required</sup> <a name="ApiKeyString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString"></a>

```csharp
public string ApiKeyString { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig">PutApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig">ResetApiKeyConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConfig` <a name="PutApiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig"></a>

```csharp
private void PutApiKeyConfig(GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `ResetApiKeyConfig` <a name="ResetApiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig"></a>

```csharp
private void ResetApiKeyConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput">ApiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference ApiKeyConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a>

---

##### `ApiKeyConfigInput`<sup>Optional</sup> <a name="ApiKeyConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig ApiKeyConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigApiAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth">PutApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putPinecone">PutPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig">PutRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb">PutRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch">PutVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth">ResetApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone">ResetPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig">ResetRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb">ResetRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch">ResetVertexVectorSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiAuth` <a name="PutApiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth"></a>

```csharp
private void PutApiAuth(GoogleVertexAiRagCorpusVectorDbConfigApiAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `PutPinecone` <a name="PutPinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putPinecone"></a>

```csharp
private void PutPinecone(GoogleVertexAiRagCorpusVectorDbConfigPinecone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putPinecone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `PutRagEmbeddingModelConfig` <a name="PutRagEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig"></a>

```csharp
private void PutRagEmbeddingModelConfig(GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `PutRagManagedDb` <a name="PutRagManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb"></a>

```csharp
private void PutRagManagedDb(GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `PutVertexVectorSearch` <a name="PutVertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch"></a>

```csharp
private void PutVertexVectorSearch(GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `ResetApiAuth` <a name="ResetApiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth"></a>

```csharp
private void ResetApiAuth()
```

##### `ResetPinecone` <a name="ResetPinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone"></a>

```csharp
private void ResetPinecone()
```

##### `ResetRagEmbeddingModelConfig` <a name="ResetRagEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig"></a>

```csharp
private void ResetRagEmbeddingModelConfig()
```

##### `ResetRagManagedDb` <a name="ResetRagManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb"></a>

```csharp
private void ResetRagManagedDb()
```

##### `ResetVertexVectorSearch` <a name="ResetVertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch"></a>

```csharp
private void ResetVertexVectorSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth">ApiAuth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone">Pinecone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference">GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig">RagEmbeddingModelConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb">RagManagedDb</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch">VertexVectorSearch</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput">ApiAuthInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput">PineconeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput">RagEmbeddingModelConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput">RagManagedDbInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput">VertexVectorSearchInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiAuth`<sup>Required</sup> <a name="ApiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference ApiAuth { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a>

---

##### `Pinecone`<sup>Required</sup> <a name="Pinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference Pinecone { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference">GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference</a>

---

##### `RagEmbeddingModelConfig`<sup>Required</sup> <a name="RagEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference RagEmbeddingModelConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a>

---

##### `RagManagedDb`<sup>Required</sup> <a name="RagManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference RagManagedDb { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a>

---

##### `VertexVectorSearch`<sup>Required</sup> <a name="VertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference VertexVectorSearch { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a>

---

##### `ApiAuthInput`<sup>Optional</sup> <a name="ApiAuthInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigApiAuth ApiAuthInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `PineconeInput`<sup>Optional</sup> <a name="PineconeInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigPinecone PineconeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `RagEmbeddingModelConfigInput`<sup>Optional</sup> <a name="RagEmbeddingModelConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig RagEmbeddingModelConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `RagManagedDbInput`<sup>Optional</sup> <a name="RagManagedDbInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb RagManagedDbInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `VertexVectorSearchInput`<sup>Optional</sup> <a name="VertexVectorSearchInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch VertexVectorSearchInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName">IndexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput"></a>

```csharp
public string IndexNameInput { get; }
```

- *Type:* string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName"></a>

```csharp
public string IndexName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigPinecone InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint">PutVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint">ResetVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVertexPredictionEndpoint` <a name="PutVertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint"></a>

```csharp
private void PutVertexPredictionEndpoint(GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `ResetVertexPredictionEndpoint` <a name="ResetVertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint"></a>

```csharp
private void ResetVertexPredictionEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint">VertexPredictionEndpoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput">VertexPredictionEndpointInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VertexPredictionEndpoint`<sup>Required</sup> <a name="VertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference VertexPredictionEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a>

---

##### `VertexPredictionEndpointInput`<sup>Optional</sup> <a name="VertexPredictionEndpointInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint VertexPredictionEndpointInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId">ModelVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `ModelVersionId`<sup>Required</sup> <a name="ModelVersionId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId"></a>

```csharp
public string ModelVersionId { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount">ResetLeafCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth">ResetTreeDepth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLeafCount` <a name="ResetLeafCount" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount"></a>

```csharp
private void ResetLeafCount()
```

##### `ResetTreeDepth` <a name="ResetTreeDepth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth"></a>

```csharp
private void ResetTreeDepth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput">LeafCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput">TreeDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount">LeafCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth">TreeDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LeafCountInput`<sup>Optional</sup> <a name="LeafCountInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput"></a>

```csharp
public double LeafCountInput { get; }
```

- *Type:* double

---

##### `TreeDepthInput`<sup>Optional</sup> <a name="TreeDepthInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput"></a>

```csharp
public double TreeDepthInput { get; }
```

- *Type:* double

---

##### `LeafCount`<sup>Required</sup> <a name="LeafCount" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount"></a>

```csharp
public double LeafCount { get; }
```

- *Type:* double

---

##### `TreeDepth`<sup>Required</sup> <a name="TreeDepth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth"></a>

```csharp
public double TreeDepth { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn">PutAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn">PutKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn">ResetAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn">ResetKnn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnn` <a name="PutAnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn"></a>

```csharp
private void PutAnn(GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `PutKnn` <a name="PutKnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn"></a>

```csharp
private void PutKnn(GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `ResetAnn` <a name="ResetAnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn"></a>

```csharp
private void ResetAnn()
```

##### `ResetKnn` <a name="ResetKnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn"></a>

```csharp
private void ResetKnn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann">Ann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn">Knn</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput">AnnInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput">KnnInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ann`<sup>Required</sup> <a name="Ann" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference Ann { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a>

---

##### `Knn`<sup>Required</sup> <a name="Knn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference Knn { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a>

---

##### `AnnInput`<sup>Optional</sup> <a name="AnnInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn AnnInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `KnnInput`<sup>Optional</sup> <a name="KnnInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn KnnInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput">IndexEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput">IndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index">Index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint">IndexEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexEndpointInput`<sup>Optional</sup> <a name="IndexEndpointInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput"></a>

```csharp
public string IndexEndpointInput { get; }
```

- *Type:* string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput"></a>

```csharp
public string IndexInput { get; }
```

- *Type:* string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index"></a>

```csharp
public string Index { get; }
```

- *Type:* string

---

##### `IndexEndpoint`<sup>Required</sup> <a name="IndexEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint"></a>

```csharp
public string IndexEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---


### GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference <a name="GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput">ServingConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig">ServingConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServingConfigInput`<sup>Optional</sup> <a name="ServingConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput"></a>

```csharp
public string ServingConfigInput { get; }
```

- *Type:* string

---

##### `ServingConfig`<sup>Required</sup> <a name="ServingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig"></a>

```csharp
public string ServingConfig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiRagCorpusVertexAiSearchConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

---



