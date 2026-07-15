# `googleVectorSearchIndex` Submodule <a name="`googleVectorSearchIndex` Submodule" id="@cdktn/provider-google-beta.googleVectorSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVectorSearchIndex <a name="GoogleVectorSearchIndex" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index google_vector_search_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchIndex(Construct Scope, string Id, GoogleVectorSearchIndexConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig">GoogleVectorSearchIndexConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig">GoogleVectorSearchIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure">PutDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDenseScann">PutDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDedicatedInfrastructure">ResetDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDenseScann">ResetDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDistanceMetric">ResetDistanceMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetFilterFields">ResetFilterFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetStoreFields">ResetStoreFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDedicatedInfrastructure` <a name="PutDedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure"></a>

```csharp
private void PutDedicatedInfrastructure(GoogleVectorSearchIndexDedicatedInfrastructure Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

---

##### `PutDenseScann` <a name="PutDenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDenseScann"></a>

```csharp
private void PutDenseScann(GoogleVectorSearchIndexDenseScann Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDenseScann.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVectorSearchIndexTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

---

##### `ResetDedicatedInfrastructure` <a name="ResetDedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDedicatedInfrastructure"></a>

```csharp
private void ResetDedicatedInfrastructure()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDenseScann` <a name="ResetDenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDenseScann"></a>

```csharp
private void ResetDenseScann()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDistanceMetric` <a name="ResetDistanceMetric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDistanceMetric"></a>

```csharp
private void ResetDistanceMetric()
```

##### `ResetFilterFields` <a name="ResetFilterFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetFilterFields"></a>

```csharp
private void ResetFilterFields()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetStoreFields` <a name="ResetStoreFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetStoreFields"></a>

```csharp
private void ResetStoreFields()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVectorSearchIndex resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVectorSearchIndex.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVectorSearchIndex.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVectorSearchIndex.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVectorSearchIndex.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleVectorSearchIndex resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVectorSearchIndex to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVectorSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVectorSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructure">DedicatedInfrastructure</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScann">DenseScann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference">GoogleVectorSearchIndexDenseScannOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference">GoogleVectorSearchIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionIdInput">CollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructureInput">DedicatedInfrastructureInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScannInput">DenseScannInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetricInput">DistanceMetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFieldsInput">FilterFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexFieldInput">IndexFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexIdInput">IndexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFieldsInput">StoreFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetric">DistanceMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFields">FilterFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexField">IndexField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexId">IndexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFields">StoreFields</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DedicatedInfrastructure`<sup>Required</sup> <a name="DedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructure"></a>

```csharp
public GoogleVectorSearchIndexDedicatedInfrastructureOutputReference DedicatedInfrastructure { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureOutputReference</a>

---

##### `DenseScann`<sup>Required</sup> <a name="DenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScann"></a>

```csharp
public GoogleVectorSearchIndexDenseScannOutputReference DenseScann { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference">GoogleVectorSearchIndexDenseScannOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeouts"></a>

```csharp
public GoogleVectorSearchIndexTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference">GoogleVectorSearchIndexTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionIdInput"></a>

```csharp
public string CollectionIdInput { get; }
```

- *Type:* string

---

##### `DedicatedInfrastructureInput`<sup>Optional</sup> <a name="DedicatedInfrastructureInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructureInput"></a>

```csharp
public GoogleVectorSearchIndexDedicatedInfrastructure DedicatedInfrastructureInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DenseScannInput`<sup>Optional</sup> <a name="DenseScannInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScannInput"></a>

```csharp
public GoogleVectorSearchIndexDenseScann DenseScannInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DistanceMetricInput`<sup>Optional</sup> <a name="DistanceMetricInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetricInput"></a>

```csharp
public string DistanceMetricInput { get; }
```

- *Type:* string

---

##### `FilterFieldsInput`<sup>Optional</sup> <a name="FilterFieldsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFieldsInput"></a>

```csharp
public string[] FilterFieldsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexFieldInput`<sup>Optional</sup> <a name="IndexFieldInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexFieldInput"></a>

```csharp
public string IndexFieldInput { get; }
```

- *Type:* string

---

##### `IndexIdInput`<sup>Optional</sup> <a name="IndexIdInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexIdInput"></a>

```csharp
public string IndexIdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `StoreFieldsInput`<sup>Optional</sup> <a name="StoreFieldsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFieldsInput"></a>

```csharp
public string[] StoreFieldsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleVectorSearchIndexTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DistanceMetric`<sup>Required</sup> <a name="DistanceMetric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetric"></a>

```csharp
public string DistanceMetric { get; }
```

- *Type:* string

---

##### `FilterFields`<sup>Required</sup> <a name="FilterFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFields"></a>

```csharp
public string[] FilterFields { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexField`<sup>Required</sup> <a name="IndexField" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexField"></a>

```csharp
public string IndexField { get; }
```

- *Type:* string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexId"></a>

```csharp
public string IndexId { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `StoreFields`<sup>Required</sup> <a name="StoreFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFields"></a>

```csharp
public string[] StoreFields { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVectorSearchIndexConfig <a name="GoogleVectorSearchIndexConfig" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchIndexConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CollectionId,
    string IndexField,
    string IndexId,
    string Location,
    GoogleVectorSearchIndexDedicatedInfrastructure DedicatedInfrastructure = null,
    string DeletionPolicy = null,
    GoogleVectorSearchIndexDenseScann DenseScann = null,
    string Description = null,
    string DisplayName = null,
    string DistanceMetric = null,
    string[] FilterFields = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    string[] StoreFields = null,
    GoogleVectorSearchIndexTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.collectionId">CollectionId</a></code> | <code>string</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexField">IndexField</a></code> | <code>string</code> | The collection schema field to index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexId">IndexId</a></code> | <code>string</code> | ID of the Index to create. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dedicatedInfrastructure">DedicatedInfrastructure</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | dedicated_infrastructure block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.denseScann">DenseScann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | dense_scann block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.description">Description</a></code> | <code>string</code> | User-specified description of the index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-specified display name of the index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.distanceMetric">DistanceMetric</a></code> | <code>string</code> | Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.filterFields">FilterFields</a></code> | <code>string[]</code> | The fields to push into the index to enable fast ANN inline filtering. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#id GoogleVectorSearchIndex#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#project GoogleVectorSearchIndex#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.storeFields">StoreFields</a></code> | <code>string[]</code> | The fields to push into the index to enable inline data retrieval. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.collectionId"></a>

```csharp
public string CollectionId { get; set; }
```

- *Type:* string

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#collection_id GoogleVectorSearchIndex#collection_id}

---

##### `IndexField`<sup>Required</sup> <a name="IndexField" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexField"></a>

```csharp
public string IndexField { get; set; }
```

- *Type:* string

The collection schema field to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#index_field GoogleVectorSearchIndex#index_field}

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexId"></a>

```csharp
public string IndexId { get; set; }
```

- *Type:* string

ID of the Index to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#index_id GoogleVectorSearchIndex#index_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#location GoogleVectorSearchIndex#location}

---

##### `DedicatedInfrastructure`<sup>Optional</sup> <a name="DedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dedicatedInfrastructure"></a>

```csharp
public GoogleVectorSearchIndexDedicatedInfrastructure DedicatedInfrastructure { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

dedicated_infrastructure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#dedicated_infrastructure GoogleVectorSearchIndex#dedicated_infrastructure}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#deletion_policy GoogleVectorSearchIndex#deletion_policy}

---

##### `DenseScann`<sup>Optional</sup> <a name="DenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.denseScann"></a>

```csharp
public GoogleVectorSearchIndexDenseScann DenseScann { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

dense_scann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#dense_scann GoogleVectorSearchIndex#dense_scann}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

User-specified description of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#description GoogleVectorSearchIndex#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-specified display name of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#display_name GoogleVectorSearchIndex#display_name}

---

##### `DistanceMetric`<sup>Optional</sup> <a name="DistanceMetric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.distanceMetric"></a>

```csharp
public string DistanceMetric { get; set; }
```

- *Type:* string

Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#distance_metric GoogleVectorSearchIndex#distance_metric}

---

##### `FilterFields`<sup>Optional</sup> <a name="FilterFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.filterFields"></a>

```csharp
public string[] FilterFields { get; set; }
```

- *Type:* string[]

The fields to push into the index to enable fast ANN inline filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#filter_fields GoogleVectorSearchIndex#filter_fields}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#id GoogleVectorSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#labels GoogleVectorSearchIndex#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#project GoogleVectorSearchIndex#project}.

---

##### `StoreFields`<sup>Optional</sup> <a name="StoreFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.storeFields"></a>

```csharp
public string[] StoreFields { get; set; }
```

- *Type:* string[]

The fields to push into the index to enable inline data retrieval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#store_fields GoogleVectorSearchIndex#store_fields}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.timeouts"></a>

```csharp
public GoogleVectorSearchIndexTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#timeouts GoogleVectorSearchIndex#timeouts}

---

### GoogleVectorSearchIndexDedicatedInfrastructure <a name="GoogleVectorSearchIndexDedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchIndexDedicatedInfrastructure {
    GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec AutoscalingSpec = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.autoscalingSpec">AutoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | autoscaling_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.mode">Mode</a></code> | <code>string</code> | Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"]. |

---

##### `AutoscalingSpec`<sup>Optional</sup> <a name="AutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.autoscalingSpec"></a>

```csharp
public GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec AutoscalingSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

autoscaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#autoscaling_spec GoogleVectorSearchIndex#autoscaling_spec}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#mode GoogleVectorSearchIndex#mode}

---

### GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec <a name="GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec {
    double MaxReplicaCount = null,
    double MinReplicaCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>double</code> | The maximum number of replicas. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.minReplicaCount">MinReplicaCount</a></code> | <code>double</code> | The minimum number of replicas. |

---

##### `MaxReplicaCount`<sup>Optional</sup> <a name="MaxReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.maxReplicaCount"></a>

```csharp
public double MaxReplicaCount { get; set; }
```

- *Type:* double

The maximum number of replicas.

Must be >= 'min_replica_count'
and <= '1000'. If not set or set to '0', defaults to the greater
of 'min_replica_count' and '2' (or '5' for the v1beta version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#max_replica_count GoogleVectorSearchIndex#max_replica_count}

---

##### `MinReplicaCount`<sup>Optional</sup> <a name="MinReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.minReplicaCount"></a>

```csharp
public double MinReplicaCount { get; set; }
```

- *Type:* double

The minimum number of replicas.

If not set or set to '0', defaults
to '2'. Must be >= '1' and <= '1000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#min_replica_count GoogleVectorSearchIndex#min_replica_count}

---

### GoogleVectorSearchIndexDenseScann <a name="GoogleVectorSearchIndexDenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchIndexDenseScann {
    string FeatureNormType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann.property.featureNormType">FeatureNormType</a></code> | <code>string</code> | Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"]. |

---

##### `FeatureNormType`<sup>Optional</sup> <a name="FeatureNormType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann.property.featureNormType"></a>

```csharp
public string FeatureNormType { get; set; }
```

- *Type:* string

Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#feature_norm_type GoogleVectorSearchIndex#feature_norm_type}

---

### GoogleVectorSearchIndexTimeouts <a name="GoogleVectorSearchIndexTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchIndexTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#create GoogleVectorSearchIndex#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#delete GoogleVectorSearchIndex#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#update GoogleVectorSearchIndex#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#create GoogleVectorSearchIndex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#delete GoogleVectorSearchIndex#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.40.0/docs/resources/google_vector_search_index#update GoogleVectorSearchIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference <a name="GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMaxReplicaCount">ResetMaxReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMinReplicaCount">ResetMinReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxReplicaCount` <a name="ResetMaxReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMaxReplicaCount"></a>

```csharp
private void ResetMaxReplicaCount()
```

##### `ResetMinReplicaCount` <a name="ResetMinReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMinReplicaCount"></a>

```csharp
private void ResetMinReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCountInput">MaxReplicaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCountInput">MinReplicaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxReplicaCountInput`<sup>Optional</sup> <a name="MaxReplicaCountInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCountInput"></a>

```csharp
public double MaxReplicaCountInput { get; }
```

- *Type:* double

---

##### `MinReplicaCountInput`<sup>Optional</sup> <a name="MinReplicaCountInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCountInput"></a>

```csharp
public double MinReplicaCountInput { get; }
```

- *Type:* double

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCount"></a>

```csharp
public double MaxReplicaCount { get; }
```

- *Type:* double

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCount"></a>

```csharp
public double MinReplicaCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---


### GoogleVectorSearchIndexDedicatedInfrastructureOutputReference <a name="GoogleVectorSearchIndexDedicatedInfrastructureOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchIndexDedicatedInfrastructureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec">PutAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetAutoscalingSpec">ResetAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingSpec` <a name="PutAutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec"></a>

```csharp
private void PutAutoscalingSpec(GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---

##### `ResetAutoscalingSpec` <a name="ResetAutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetAutoscalingSpec"></a>

```csharp
private void ResetAutoscalingSpec()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpec">AutoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpecInput">AutoscalingSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscalingSpec`<sup>Required</sup> <a name="AutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpec"></a>

```csharp
public GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference AutoscalingSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference</a>

---

##### `AutoscalingSpecInput`<sup>Optional</sup> <a name="AutoscalingSpecInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpecInput"></a>

```csharp
public GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec AutoscalingSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.internalValue"></a>

```csharp
public GoogleVectorSearchIndexDedicatedInfrastructure InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

---


### GoogleVectorSearchIndexDenseScannOutputReference <a name="GoogleVectorSearchIndexDenseScannOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchIndexDenseScannOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resetFeatureNormType">ResetFeatureNormType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFeatureNormType` <a name="ResetFeatureNormType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resetFeatureNormType"></a>

```csharp
private void ResetFeatureNormType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormTypeInput">FeatureNormTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormType">FeatureNormType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FeatureNormTypeInput`<sup>Optional</sup> <a name="FeatureNormTypeInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormTypeInput"></a>

```csharp
public string FeatureNormTypeInput { get; }
```

- *Type:* string

---

##### `FeatureNormType`<sup>Required</sup> <a name="FeatureNormType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormType"></a>

```csharp
public string FeatureNormType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.internalValue"></a>

```csharp
public GoogleVectorSearchIndexDenseScann InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

---


### GoogleVectorSearchIndexTimeoutsOutputReference <a name="GoogleVectorSearchIndexTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVectorSearchIndexTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVectorSearchIndexTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

---



