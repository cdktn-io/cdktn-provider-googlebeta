# `googleVertexAiPersistentResource` Submodule <a name="`googleVertexAiPersistentResource` Submodule" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiPersistentResource <a name="GoogleVertexAiPersistentResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource google_vertex_ai_persistent_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResource(Construct Scope, string Id, GoogleVertexAiPersistentResourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig">GoogleVertexAiPersistentResourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig">GoogleVertexAiPersistentResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putPscInterfaceConfig">PutPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourcePools">PutResourcePools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourceRuntimeSpec">PutResourceRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetPscInterfaceConfig">ResetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetReservedIpRanges">ResetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetResourceRuntimeSpec">ResetResourceRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(GoogleVertexAiPersistentResourceEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a>

---

##### `PutPscInterfaceConfig` <a name="PutPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putPscInterfaceConfig"></a>

```csharp
private void PutPscInterfaceConfig(GoogleVertexAiPersistentResourcePscInterfaceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a>

---

##### `PutResourcePools` <a name="PutResourcePools" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourcePools"></a>

```csharp
private void PutResourcePools(IResolvable|GoogleVertexAiPersistentResourceResourcePools[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourcePools.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>[]

---

##### `PutResourceRuntimeSpec` <a name="PutResourceRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourceRuntimeSpec"></a>

```csharp
private void PutResourceRuntimeSpec(GoogleVertexAiPersistentResourceResourceRuntimeSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourceRuntimeSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVertexAiPersistentResourceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPscInterfaceConfig` <a name="ResetPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetPscInterfaceConfig"></a>

```csharp
private void ResetPscInterfaceConfig()
```

##### `ResetReservedIpRanges` <a name="ResetReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetReservedIpRanges"></a>

```csharp
private void ResetReservedIpRanges()
```

##### `ResetResourceRuntimeSpec` <a name="ResetResourceRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetResourceRuntimeSpec"></a>

```csharp
private void ResetResourceRuntimeSpec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiPersistentResource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiPersistentResource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiPersistentResource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiPersistentResource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiPersistentResource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleVertexAiPersistentResource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiPersistentResource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiPersistentResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiPersistentResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference">GoogleVertexAiPersistentResourceEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList">GoogleVertexAiPersistentResourceErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference">GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourcePools">ResourcePools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList">GoogleVertexAiPersistentResourceResourcePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntime">ResourceRuntime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList">GoogleVertexAiPersistentResourceResourceRuntimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntimeSpec">ResourceRuntimeSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference">GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.satisfiesPzi">SatisfiesPzi</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.satisfiesPzs">SatisfiesPzs</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference">GoogleVertexAiPersistentResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.pscInterfaceConfigInput">PscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.reservedIpRangesInput">ReservedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourcePoolsInput">ResourcePoolsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntimeSpecInput">ResourceRuntimeSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiPersistentResourceEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference">GoogleVertexAiPersistentResourceEncryptionSpecOutputReference</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.error"></a>

```csharp
public GoogleVertexAiPersistentResourceErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList">GoogleVertexAiPersistentResourceErrorList</a>

---

##### `PscInterfaceConfig`<sup>Required</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.pscInterfaceConfig"></a>

```csharp
public GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference PscInterfaceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference">GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference</a>

---

##### `ResourcePools`<sup>Required</sup> <a name="ResourcePools" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourcePools"></a>

```csharp
public GoogleVertexAiPersistentResourceResourcePoolsList ResourcePools { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList">GoogleVertexAiPersistentResourceResourcePoolsList</a>

---

##### `ResourceRuntime`<sup>Required</sup> <a name="ResourceRuntime" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntime"></a>

```csharp
public GoogleVertexAiPersistentResourceResourceRuntimeList ResourceRuntime { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList">GoogleVertexAiPersistentResourceResourceRuntimeList</a>

---

##### `ResourceRuntimeSpec`<sup>Required</sup> <a name="ResourceRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntimeSpec"></a>

```csharp
public GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference ResourceRuntimeSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference">GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference</a>

---

##### `SatisfiesPzi`<sup>Required</sup> <a name="SatisfiesPzi" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.satisfiesPzi"></a>

```csharp
public IResolvable SatisfiesPzi { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SatisfiesPzs`<sup>Required</sup> <a name="SatisfiesPzs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.satisfiesPzs"></a>

```csharp
public IResolvable SatisfiesPzs { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.timeouts"></a>

```csharp
public GoogleVertexAiPersistentResourceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference">GoogleVertexAiPersistentResourceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.encryptionSpecInput"></a>

```csharp
public GoogleVertexAiPersistentResourceEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PscInterfaceConfigInput`<sup>Optional</sup> <a name="PscInterfaceConfigInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.pscInterfaceConfigInput"></a>

```csharp
public GoogleVertexAiPersistentResourcePscInterfaceConfig PscInterfaceConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a>

---

##### `ReservedIpRangesInput`<sup>Optional</sup> <a name="ReservedIpRangesInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.reservedIpRangesInput"></a>

```csharp
public string[] ReservedIpRangesInput { get; }
```

- *Type:* string[]

---

##### `ResourcePoolsInput`<sup>Optional</sup> <a name="ResourcePoolsInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourcePoolsInput"></a>

```csharp
public IResolvable|GoogleVertexAiPersistentResourceResourcePools[] ResourcePoolsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>[]

---

##### `ResourceRuntimeSpecInput`<sup>Optional</sup> <a name="ResourceRuntimeSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntimeSpecInput"></a>

```csharp
public GoogleVertexAiPersistentResourceResourceRuntimeSpec ResourceRuntimeSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleVertexAiPersistentResourceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReservedIpRanges`<sup>Required</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.reservedIpRanges"></a>

```csharp
public string[] ReservedIpRanges { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiPersistentResourceConfig <a name="GoogleVertexAiPersistentResourceConfig" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IResolvable|GoogleVertexAiPersistentResourceResourcePools[] ResourcePools,
    string DeletionPolicy = null,
    string DisplayName = null,
    GoogleVertexAiPersistentResourceEncryptionSpec EncryptionSpec = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Network = null,
    string Project = null,
    GoogleVertexAiPersistentResourcePscInterfaceConfig PscInterfaceConfig = null,
    string[] ReservedIpRanges = null,
    GoogleVertexAiPersistentResourceResourceRuntimeSpec ResourceRuntimeSpec = null,
    GoogleVertexAiPersistentResourceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.name">Name</a></code> | <code>string</code> | The ID to use for the PersistentResource, which become the final component of the PersistentResource's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.resourcePools">ResourcePools</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>[]</code> | resource_pools block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the PersistentResource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#id GoogleVertexAiPersistentResource#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize PersistentResource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.location">Location</a></code> | <code>string</code> | The location of the PersistentResource. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.network">Network</a></code> | <code>string</code> | The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to peered with Vertex AI to host the persistent resources. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#project GoogleVertexAiPersistentResource#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>string[]</code> | A list of names for the reserved IP ranges under the VPC network that can be used for this persistent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.resourceRuntimeSpec">ResourceRuntimeSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a></code> | resource_runtime_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The ID to use for the PersistentResource, which become the final component of the PersistentResource's resource name.

The maximum length is 63 characters, and valid characters
are '/^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#name GoogleVertexAiPersistentResource#name}

---

##### `ResourcePools`<sup>Required</sup> <a name="ResourcePools" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.resourcePools"></a>

```csharp
public IResolvable|GoogleVertexAiPersistentResourceResourcePools[] ResourcePools { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>[]

resource_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#resource_pools GoogleVertexAiPersistentResource#resource_pools}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#deletion_policy GoogleVertexAiPersistentResource#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the PersistentResource.

The name can be up to 128 characters long and can consist of any UTF-8
characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#display_name GoogleVertexAiPersistentResource#display_name}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiPersistentResourceEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#encryption_spec GoogleVertexAiPersistentResource#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#id GoogleVertexAiPersistentResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.labels"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#labels GoogleVertexAiPersistentResource#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the PersistentResource. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#location GoogleVertexAiPersistentResource#location}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to peered with Vertex AI to host the persistent resources.

For example, 'projects/12345/global/networks/myVPC'.
[Format](/compute/docs/reference/rest/v1/networks/insert)
is of the form 'projects/{project}/global/networks/{network}'.
Where {project} is a project number, as in '12345', and {network} is a
network name.

To specify this field, you must have already [configured VPC Network
Peering for Vertex
AI](https://cloud.google.com/vertex-ai/docs/general/vpc-peering).

If this field is left unspecified, the resources aren't peered with any
network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#network GoogleVertexAiPersistentResource#network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#project GoogleVertexAiPersistentResource#project}.

---

##### `PscInterfaceConfig`<sup>Optional</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.pscInterfaceConfig"></a>

```csharp
public GoogleVertexAiPersistentResourcePscInterfaceConfig PscInterfaceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#psc_interface_config GoogleVertexAiPersistentResource#psc_interface_config}

---

##### `ReservedIpRanges`<sup>Optional</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.reservedIpRanges"></a>

```csharp
public string[] ReservedIpRanges { get; set; }
```

- *Type:* string[]

A list of names for the reserved IP ranges under the VPC network that can be used for this persistent resource.

If set, we will deploy the persistent resource within the provided IP
ranges. Otherwise, the persistent resource is deployed to any IP
ranges under the provided VPC network.

Example: ['vertex-ai-ip-range'].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#reserved_ip_ranges GoogleVertexAiPersistentResource#reserved_ip_ranges}

---

##### `ResourceRuntimeSpec`<sup>Optional</sup> <a name="ResourceRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.resourceRuntimeSpec"></a>

```csharp
public GoogleVertexAiPersistentResourceResourceRuntimeSpec ResourceRuntimeSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a>

resource_runtime_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#resource_runtime_spec GoogleVertexAiPersistentResource#resource_runtime_spec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.timeouts"></a>

```csharp
public GoogleVertexAiPersistentResourceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#timeouts GoogleVertexAiPersistentResource#timeouts}

---

### GoogleVertexAiPersistentResourceEncryptionSpec <a name="GoogleVertexAiPersistentResourceEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have
the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#kms_key_name GoogleVertexAiPersistentResource#kms_key_name}

---

### GoogleVertexAiPersistentResourceError <a name="GoogleVertexAiPersistentResourceError" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceError {

};
```


### GoogleVertexAiPersistentResourcePscInterfaceConfig <a name="GoogleVertexAiPersistentResourcePscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourcePscInterfaceConfig {
    IResolvable|GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs[] DnsPeeringConfigs = null,
    string NetworkAttachment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>[]</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | The name of the Compute Engine [network attachment](https://cloud.google.com/vpc/docs/about-network-attachments) to attach to the resource within the region and user project. To specify this field, you must have already [created a network attachment] (https://cloud.google.com/vpc/docs/create-manage-network-attachments#create-network-attachments). This field is only used for resources using PSC-I. |

---

##### `DnsPeeringConfigs`<sup>Optional</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig.property.dnsPeeringConfigs"></a>

```csharp
public IResolvable|GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs[] DnsPeeringConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>[]

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#dns_peering_configs GoogleVertexAiPersistentResource#dns_peering_configs}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

The name of the Compute Engine [network attachment](https://cloud.google.com/vpc/docs/about-network-attachments) to attach to the resource within the region and user project. To specify this field, you must have already [created a network attachment] (https://cloud.google.com/vpc/docs/create-manage-network-attachments#create-network-attachments). This field is only used for resources using PSC-I.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#network_attachment GoogleVertexAiPersistentResource#network_attachment}

---

### GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs <a name="GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs {
    string Domain,
    string TargetNetwork,
    string TargetProject
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.domain">Domain</a></code> | <code>string</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">TargetNetwork</a></code> | <code>string</code> | The VPC network name in the target_project where the DNS zone specified by 'domain' is visible. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetProject">TargetProject</a></code> | <code>string</code> | The project ID hosting the Cloud DNS managed zone that contains the 'domain'. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#domain GoogleVertexAiPersistentResource#domain}

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```csharp
public string TargetNetwork { get; set; }
```

- *Type:* string

The VPC network name in the target_project where the DNS zone specified by 'domain' is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#target_network GoogleVertexAiPersistentResource#target_network}

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```csharp
public string TargetProject { get; set; }
```

- *Type:* string

The project ID hosting the Cloud DNS managed zone that contains the 'domain'.

The Vertex AI Service Agent requires the
dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#target_project GoogleVertexAiPersistentResource#target_project}

---

### GoogleVertexAiPersistentResourceResourcePools <a name="GoogleVertexAiPersistentResourceResourcePools" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourcePools {
    GoogleVertexAiPersistentResourceResourcePoolsMachineSpec MachineSpec,
    GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec AutoscalingSpec = null,
    GoogleVertexAiPersistentResourceResourcePoolsDiskSpec DiskSpec = null,
    string Id = null,
    string ReplicaCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.autoscalingSpec">AutoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a></code> | autoscaling_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.id">Id</a></code> | <code>string</code> | The unique ID in a PersistentResource for referring to this resource pool. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.replicaCount">ReplicaCount</a></code> | <code>string</code> | The total number of machines to use for this resource pool. |

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.machineSpec"></a>

```csharp
public GoogleVertexAiPersistentResourceResourcePoolsMachineSpec MachineSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#machine_spec GoogleVertexAiPersistentResource#machine_spec}

---

##### `AutoscalingSpec`<sup>Optional</sup> <a name="AutoscalingSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.autoscalingSpec"></a>

```csharp
public GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec AutoscalingSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a>

autoscaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#autoscaling_spec GoogleVertexAiPersistentResource#autoscaling_spec}

---

##### `DiskSpec`<sup>Optional</sup> <a name="DiskSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.diskSpec"></a>

```csharp
public GoogleVertexAiPersistentResourceResourcePoolsDiskSpec DiskSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#disk_spec GoogleVertexAiPersistentResource#disk_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique ID in a PersistentResource for referring to this resource pool.

User can specify it if necessary. Otherwise, it's generated
automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#id GoogleVertexAiPersistentResource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.replicaCount"></a>

```csharp
public string ReplicaCount { get; set; }
```

- *Type:* string

The total number of machines to use for this resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#replica_count GoogleVertexAiPersistentResource#replica_count}

---

### GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec <a name="GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec {
    string MaxReplicaCount = null,
    string MinReplicaCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>string</code> | max replicas in the node pool, must be ≥ replica_count and > min_replica_count or will throw error. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.minReplicaCount">MinReplicaCount</a></code> | <code>string</code> | min replicas in the node pool, must be ≤ replica_count and < max_replica_count or will throw error. |

---

##### `MaxReplicaCount`<sup>Optional</sup> <a name="MaxReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.maxReplicaCount"></a>

```csharp
public string MaxReplicaCount { get; set; }
```

- *Type:* string

max replicas in the node pool, must be ≥ replica_count and > min_replica_count or will throw error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#max_replica_count GoogleVertexAiPersistentResource#max_replica_count}

---

##### `MinReplicaCount`<sup>Optional</sup> <a name="MinReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.minReplicaCount"></a>

```csharp
public string MinReplicaCount { get; set; }
```

- *Type:* string

min replicas in the node pool, must be ≤ replica_count and < max_replica_count or will throw error.

For autoscaling enabled Ray-on-Vertex, we allow min_replica_count of a
resource_pool to be 0 to match the OSS Ray
behavior(https://docs.ray.io/en/latest/cluster/vms/user-guides/configuring-autoscaling.html#cluster-config-parameters).
As for Persistent Resource, the min_replica_count must be > 0, we added
a corresponding validation inside
CreatePersistentResourceRequestValidator.java.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#min_replica_count GoogleVertexAiPersistentResource#min_replica_count}

---

### GoogleVertexAiPersistentResourceResourcePoolsDiskSpec <a name="GoogleVertexAiPersistentResourceResourcePoolsDiskSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourcePoolsDiskSpec {
    double BootDiskSizeGb = null,
    string BootDiskType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | Size in GB of the boot disk (default is 100GB). |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | Type of the boot disk. |

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; set; }
```

- *Type:* double

Size in GB of the boot disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#boot_disk_size_gb GoogleVertexAiPersistentResource#boot_disk_size_gb}

---

##### `BootDiskType`<sup>Optional</sup> <a name="BootDiskType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; set; }
```

- *Type:* string

Type of the boot disk.

For non-A3U machines, the default value is
"pd-ssd", for A3U machines, the default value is "hyperdisk-balanced".
Valid values: "pd-ssd" (Persistent Disk Solid State Drive),
"pd-standard" (Persistent Disk Hard Disk Drive) or "hyperdisk-balanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#boot_disk_type GoogleVertexAiPersistentResource#boot_disk_type}

---

### GoogleVertexAiPersistentResourceResourcePoolsMachineSpec <a name="GoogleVertexAiPersistentResourceResourcePoolsMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourcePoolsMachineSpec {
    double AcceleratorCount = null,
    string AcceleratorType = null,
    string MachineType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | The type of accelerator(s) that may be attached to the machine. Possible values: NVIDIA_TESLA_K80 NVIDIA_TESLA_P100 NVIDIA_TESLA_V100 NVIDIA_TESLA_P4 NVIDIA_TESLA_T4 NVIDIA_TESLA_A100 NVIDIA_A100_80GB NVIDIA_L4 NVIDIA_H100_80GB NVIDIA_H100_MEGA_80GB NVIDIA_H200_141GB NVIDIA_B200 NVIDIA_GB200 NVIDIA_RTX_PRO_6000 TPU_V2 TPU_V3 TPU_V4_POD TPU_V5_LITEPOD. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.machineType">MachineType</a></code> | <code>string</code> | The type of the machine. |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; set; }
```

- *Type:* double

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#accelerator_count GoogleVertexAiPersistentResource#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; set; }
```

- *Type:* string

The type of accelerator(s) that may be attached to the machine. Possible values: NVIDIA_TESLA_K80 NVIDIA_TESLA_P100 NVIDIA_TESLA_V100 NVIDIA_TESLA_P4 NVIDIA_TESLA_T4 NVIDIA_TESLA_A100 NVIDIA_A100_80GB NVIDIA_L4 NVIDIA_H100_80GB NVIDIA_H100_MEGA_80GB NVIDIA_H200_141GB NVIDIA_B200 NVIDIA_GB200 NVIDIA_RTX_PRO_6000 TPU_V2 TPU_V3 TPU_V4_POD TPU_V5_LITEPOD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#accelerator_type GoogleVertexAiPersistentResource#accelerator_type}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The type of the machine.

See the [list of machine types supported for
prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)

See the [list of machine types supported for custom
training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#machine_type GoogleVertexAiPersistentResource#machine_type}

---

### GoogleVertexAiPersistentResourceResourceRuntime <a name="GoogleVertexAiPersistentResourceResourceRuntime" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourceRuntime {

};
```


### GoogleVertexAiPersistentResourceResourceRuntimeSpec <a name="GoogleVertexAiPersistentResourceResourceRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourceRuntimeSpec {
    GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec ServiceAccountSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec.property.serviceAccountSpec">ServiceAccountSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a></code> | service_account_spec block. |

---

##### `ServiceAccountSpec`<sup>Optional</sup> <a name="ServiceAccountSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec.property.serviceAccountSpec"></a>

```csharp
public GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec ServiceAccountSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

service_account_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#service_account_spec GoogleVertexAiPersistentResource#service_account_spec}

---

### GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec <a name="GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec {
    bool|IResolvable EnableCustomServiceAccount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec.property.enableCustomServiceAccount">EnableCustomServiceAccount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, custom user-managed service account is enforced to run any workloads (for example, Vertex Jobs) on the resource. |

---

##### `EnableCustomServiceAccount`<sup>Required</sup> <a name="EnableCustomServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec.property.enableCustomServiceAccount"></a>

```csharp
public bool|IResolvable EnableCustomServiceAccount { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, custom user-managed service account is enforced to run any workloads (for example, Vertex Jobs) on the resource.

Otherwise, uses the [Vertex AI Custom Code Service
Agent](https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#enable_custom_service_account GoogleVertexAiPersistentResource#enable_custom_service_account}

---

### GoogleVertexAiPersistentResourceTimeouts <a name="GoogleVertexAiPersistentResourceTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#create GoogleVertexAiPersistentResource#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#delete GoogleVertexAiPersistentResource#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#update GoogleVertexAiPersistentResource#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#create GoogleVertexAiPersistentResource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#delete GoogleVertexAiPersistentResource#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_persistent_resource#update GoogleVertexAiPersistentResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiPersistentResourceEncryptionSpecOutputReference <a name="GoogleVertexAiPersistentResourceEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPersistentResourceEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a>

---


### GoogleVertexAiPersistentResourceErrorList <a name="GoogleVertexAiPersistentResourceErrorList" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.get"></a>

```csharp
private GoogleVertexAiPersistentResourceErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiPersistentResourceErrorOutputReference <a name="GoogleVertexAiPersistentResourceErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceError">GoogleVertexAiPersistentResourceError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPersistentResourceError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceError">GoogleVertexAiPersistentResourceError</a>

---


### GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList <a name="GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.get"></a>

```csharp
private GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>[]

---


### GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference <a name="GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">TargetProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">TargetProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```csharp
public string TargetNetworkInput { get; }
```

- *Type:* string

---

##### `TargetProjectInput`<sup>Optional</sup> <a name="TargetProjectInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```csharp
public string TargetProjectInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```csharp
public string TargetNetwork { get; }
```

- *Type:* string

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```csharp
public string TargetProject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>

---


### GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference <a name="GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.putDnsPeeringConfigs">PutDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resetDnsPeeringConfigs">ResetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsPeeringConfigs` <a name="PutDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```csharp
private void PutDnsPeeringConfigs(IResolvable|GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>[]

---

##### `ResetDnsPeeringConfigs` <a name="ResetDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```csharp
private void ResetDnsPeeringConfigs()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```csharp
private void ResetNetworkAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">DnsPeeringConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsPeeringConfigs`<sup>Required</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```csharp
public GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList DnsPeeringConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `DnsPeeringConfigsInput`<sup>Optional</sup> <a name="DnsPeeringConfigsInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```csharp
public IResolvable|GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs[] DnsPeeringConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs</a>[]

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPersistentResourcePscInterfaceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a>

---


### GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference <a name="GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMaxReplicaCount">ResetMaxReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMinReplicaCount">ResetMinReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxReplicaCount` <a name="ResetMaxReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMaxReplicaCount"></a>

```csharp
private void ResetMaxReplicaCount()
```

##### `ResetMinReplicaCount` <a name="ResetMinReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMinReplicaCount"></a>

```csharp
private void ResetMinReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCountInput">MaxReplicaCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCountInput">MinReplicaCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxReplicaCountInput`<sup>Optional</sup> <a name="MaxReplicaCountInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCountInput"></a>

```csharp
public string MaxReplicaCountInput { get; }
```

- *Type:* string

---

##### `MinReplicaCountInput`<sup>Optional</sup> <a name="MinReplicaCountInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCountInput"></a>

```csharp
public string MinReplicaCountInput { get; }
```

- *Type:* string

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCount"></a>

```csharp
public string MaxReplicaCount { get; }
```

- *Type:* string

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCount"></a>

```csharp
public string MinReplicaCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a>

---


### GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference <a name="GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskType">ResetBootDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskSizeGb"></a>

```csharp
private void ResetBootDiskSizeGb()
```

##### `ResetBootDiskType` <a name="ResetBootDiskType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskType"></a>

```csharp
private void ResetBootDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskTypeInput">BootDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGbInput"></a>

```csharp
public double BootDiskSizeGbInput { get; }
```

- *Type:* double

---

##### `BootDiskTypeInput`<sup>Optional</sup> <a name="BootDiskTypeInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskTypeInput"></a>

```csharp
public string BootDiskTypeInput { get; }
```

- *Type:* string

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; }
```

- *Type:* double

---

##### `BootDiskType`<sup>Required</sup> <a name="BootDiskType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPersistentResourceResourcePoolsDiskSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a>

---


### GoogleVertexAiPersistentResourceResourcePoolsList <a name="GoogleVertexAiPersistentResourceResourcePoolsList" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourcePoolsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.get"></a>

```csharp
private GoogleVertexAiPersistentResourceResourcePoolsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiPersistentResourceResourcePools[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>[]

---


### GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference <a name="GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorCount"></a>

```csharp
private void ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorType"></a>

```csharp
private void ResetAcceleratorType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCountInput"></a>

```csharp
public double AcceleratorCountInput { get; }
```

- *Type:* double

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```csharp
public string AcceleratorTypeInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; }
```

- *Type:* double

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPersistentResourceResourcePoolsMachineSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a>

---


### GoogleVertexAiPersistentResourceResourcePoolsOutputReference <a name="GoogleVertexAiPersistentResourceResourcePoolsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourcePoolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putAutoscalingSpec">PutAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putDiskSpec">PutDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetAutoscalingSpec">ResetAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetDiskSpec">ResetDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetReplicaCount">ResetReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingSpec` <a name="PutAutoscalingSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putAutoscalingSpec"></a>

```csharp
private void PutAutoscalingSpec(GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putAutoscalingSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a>

---

##### `PutDiskSpec` <a name="PutDiskSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putDiskSpec"></a>

```csharp
private void PutDiskSpec(GoogleVertexAiPersistentResourceResourcePoolsDiskSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a>

---

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putMachineSpec"></a>

```csharp
private void PutMachineSpec(GoogleVertexAiPersistentResourceResourcePoolsMachineSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a>

---

##### `ResetAutoscalingSpec` <a name="ResetAutoscalingSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetAutoscalingSpec"></a>

```csharp
private void ResetAutoscalingSpec()
```

##### `ResetDiskSpec` <a name="ResetDiskSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetDiskSpec"></a>

```csharp
private void ResetDiskSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetReplicaCount"></a>

```csharp
private void ResetReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpec">AutoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.usedReplicaCount">UsedReplicaCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpecInput">AutoscalingSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpecInput">DiskSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCountInput">ReplicaCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCount">ReplicaCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscalingSpec`<sup>Required</sup> <a name="AutoscalingSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpec"></a>

```csharp
public GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference AutoscalingSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference</a>

---

##### `DiskSpec`<sup>Required</sup> <a name="DiskSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpec"></a>

```csharp
public GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference DiskSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference</a>

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpec"></a>

```csharp
public GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference MachineSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference</a>

---

##### `UsedReplicaCount`<sup>Required</sup> <a name="UsedReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.usedReplicaCount"></a>

```csharp
public string UsedReplicaCount { get; }
```

- *Type:* string

---

##### `AutoscalingSpecInput`<sup>Optional</sup> <a name="AutoscalingSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpecInput"></a>

```csharp
public GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec AutoscalingSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a>

---

##### `DiskSpecInput`<sup>Optional</sup> <a name="DiskSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpecInput"></a>

```csharp
public GoogleVertexAiPersistentResourceResourcePoolsDiskSpec DiskSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpecInput"></a>

```csharp
public GoogleVertexAiPersistentResourceResourcePoolsMachineSpec MachineSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a>

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCountInput"></a>

```csharp
public string ReplicaCountInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCount"></a>

```csharp
public string ReplicaCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiPersistentResourceResourcePools InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools">GoogleVertexAiPersistentResourceResourcePools</a>

---


### GoogleVertexAiPersistentResourceResourceRuntimeList <a name="GoogleVertexAiPersistentResourceResourceRuntimeList" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourceRuntimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.get"></a>

```csharp
private GoogleVertexAiPersistentResourceResourceRuntimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiPersistentResourceResourceRuntimeOutputReference <a name="GoogleVertexAiPersistentResourceResourceRuntimeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourceRuntimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.accessUris">AccessUris</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntime">GoogleVertexAiPersistentResourceResourceRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessUris`<sup>Required</sup> <a name="AccessUris" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.accessUris"></a>

```csharp
public StringMap AccessUris { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPersistentResourceResourceRuntime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntime">GoogleVertexAiPersistentResourceResourceRuntime</a>

---


### GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference <a name="GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.putServiceAccountSpec">PutServiceAccountSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.resetServiceAccountSpec">ResetServiceAccountSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceAccountSpec` <a name="PutServiceAccountSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.putServiceAccountSpec"></a>

```csharp
private void PutServiceAccountSpec(GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.putServiceAccountSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

---

##### `ResetServiceAccountSpec` <a name="ResetServiceAccountSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.resetServiceAccountSpec"></a>

```csharp
private void ResetServiceAccountSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpec">ServiceAccountSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpecInput">ServiceAccountSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceAccountSpec`<sup>Required</sup> <a name="ServiceAccountSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpec"></a>

```csharp
public GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference ServiceAccountSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference</a>

---

##### `ServiceAccountSpecInput`<sup>Optional</sup> <a name="ServiceAccountSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpecInput"></a>

```csharp
public GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec ServiceAccountSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPersistentResourceResourceRuntimeSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a>

---


### GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference <a name="GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccountInput">EnableCustomServiceAccountInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccount">EnableCustomServiceAccount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableCustomServiceAccountInput`<sup>Optional</sup> <a name="EnableCustomServiceAccountInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccountInput"></a>

```csharp
public bool|IResolvable EnableCustomServiceAccountInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableCustomServiceAccount`<sup>Required</sup> <a name="EnableCustomServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccount"></a>

```csharp
public bool|IResolvable EnableCustomServiceAccount { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

---


### GoogleVertexAiPersistentResourceTimeoutsOutputReference <a name="GoogleVertexAiPersistentResourceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiPersistentResourceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiPersistentResourceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a>

---



