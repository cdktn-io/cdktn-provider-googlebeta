# `googleVertexAiIndexEndpoint` Submodule <a name="`googleVertexAiIndexEndpoint` Submodule" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiIndexEndpoint <a name="GoogleVertexAiIndexEndpoint" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint google_vertex_ai_index_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiIndexEndpoint(Construct Scope, string Id, GoogleVertexAiIndexEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig">GoogleVertexAiIndexEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig">GoogleVertexAiIndexEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putPrivateServiceConnectConfig">PutPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetPrivateServiceConnectConfig">ResetPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetPublicEndpointEnabled">ResetPublicEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(GoogleVertexAiIndexEndpointEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec">GoogleVertexAiIndexEndpointEncryptionSpec</a>

---

##### `PutPrivateServiceConnectConfig` <a name="PutPrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putPrivateServiceConnectConfig"></a>

```csharp
private void PutPrivateServiceConnectConfig(GoogleVertexAiIndexEndpointPrivateServiceConnectConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVertexAiIndexEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetPrivateServiceConnectConfig` <a name="ResetPrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetPrivateServiceConnectConfig"></a>

```csharp
private void ResetPrivateServiceConnectConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPublicEndpointEnabled` <a name="ResetPublicEndpointEnabled" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetPublicEndpointEnabled"></a>

```csharp
private void ResetPublicEndpointEnabled()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiIndexEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiIndexEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiIndexEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiIndexEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiIndexEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleVertexAiIndexEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiIndexEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiIndexEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiIndexEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference">GoogleVertexAiIndexEndpointEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointDomainName">PublicEndpointDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference">GoogleVertexAiIndexEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec">GoogleVertexAiIndexEndpointEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.privateServiceConnectConfigInput">PrivateServiceConnectConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointEnabledInput">PublicEndpointEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointEnabled">PublicEndpointEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiIndexEndpointEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference">GoogleVertexAiIndexEndpointEncryptionSpecOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateServiceConnectConfig`<sup>Required</sup> <a name="PrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.privateServiceConnectConfig"></a>

```csharp
public GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference PrivateServiceConnectConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference</a>

---

##### `PublicEndpointDomainName`<sup>Required</sup> <a name="PublicEndpointDomainName" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointDomainName"></a>

```csharp
public string PublicEndpointDomainName { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.timeouts"></a>

```csharp
public GoogleVertexAiIndexEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference">GoogleVertexAiIndexEndpointTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.encryptionSpecInput"></a>

```csharp
public GoogleVertexAiIndexEndpointEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec">GoogleVertexAiIndexEndpointEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PrivateServiceConnectConfigInput`<sup>Optional</sup> <a name="PrivateServiceConnectConfigInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.privateServiceConnectConfigInput"></a>

```csharp
public GoogleVertexAiIndexEndpointPrivateServiceConnectConfig PrivateServiceConnectConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PublicEndpointEnabledInput`<sup>Optional</sup> <a name="PublicEndpointEnabledInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointEnabledInput"></a>

```csharp
public bool|IResolvable PublicEndpointEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleVertexAiIndexEndpointTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PublicEndpointEnabled`<sup>Required</sup> <a name="PublicEndpointEnabled" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointEnabled"></a>

```csharp
public bool|IResolvable PublicEndpointEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiIndexEndpointConfig <a name="GoogleVertexAiIndexEndpointConfig" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiIndexEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Description = null,
    GoogleVertexAiIndexEndpointEncryptionSpec EncryptionSpec = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Network = null,
    GoogleVertexAiIndexEndpointPrivateServiceConnectConfig PrivateServiceConnectConfig = null,
    string Project = null,
    bool|IResolvable PublicEndpointEnabled = null,
    string Region = null,
    GoogleVertexAiIndexEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the Index. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.description">Description</a></code> | <code>string</code> | The description of the Index. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec">GoogleVertexAiIndexEndpointEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#id GoogleVertexAiIndexEndpoint#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize your Indexes. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.network">Network</a></code> | <code>string</code> | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#project GoogleVertexAiIndexEndpoint#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.publicEndpointEnabled">PublicEndpointEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the deployed index will be accessible through public endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.region">Region</a></code> | <code>string</code> | The region of the index endpoint. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#display_name GoogleVertexAiIndexEndpoint#display_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#description GoogleVertexAiIndexEndpoint#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiIndexEndpointEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec">GoogleVertexAiIndexEndpointEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#encryption_spec GoogleVertexAiIndexEndpoint#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#id GoogleVertexAiIndexEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels with user-defined metadata to organize your Indexes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#labels GoogleVertexAiIndexEndpoint#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#network GoogleVertexAiIndexEndpoint#network}

---

##### `PrivateServiceConnectConfig`<sup>Optional</sup> <a name="PrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.privateServiceConnectConfig"></a>

```csharp
public GoogleVertexAiIndexEndpointPrivateServiceConnectConfig PrivateServiceConnectConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#private_service_connect_config GoogleVertexAiIndexEndpoint#private_service_connect_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#project GoogleVertexAiIndexEndpoint#project}.

---

##### `PublicEndpointEnabled`<sup>Optional</sup> <a name="PublicEndpointEnabled" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.publicEndpointEnabled"></a>

```csharp
public bool|IResolvable PublicEndpointEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the deployed index will be accessible through public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#public_endpoint_enabled GoogleVertexAiIndexEndpoint#public_endpoint_enabled}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the index endpoint. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#region GoogleVertexAiIndexEndpoint#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.timeouts"></a>

```csharp
public GoogleVertexAiIndexEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#timeouts GoogleVertexAiIndexEndpoint#timeouts}

---

### GoogleVertexAiIndexEndpointEncryptionSpec <a name="GoogleVertexAiIndexEndpointEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiIndexEndpointEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Required. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Required.

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#kms_key_name GoogleVertexAiIndexEndpoint#kms_key_name}

---

### GoogleVertexAiIndexEndpointPrivateServiceConnectConfig <a name="GoogleVertexAiIndexEndpointPrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiIndexEndpointPrivateServiceConnectConfig {
    bool|IResolvable EnablePrivateServiceConnect,
    string[] ProjectAllowlist = null,
    IResolvable|GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs[] PscAutomationConfigs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect">EnablePrivateServiceConnect</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, the IndexEndpoint is created without private service access. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.projectAllowlist">ProjectAllowlist</a></code> | <code>string[]</code> | A list of Projects from which the forwarding rule will target the service attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.pscAutomationConfigs">PscAutomationConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>[]</code> | psc_automation_configs block. |

---

##### `EnablePrivateServiceConnect`<sup>Required</sup> <a name="EnablePrivateServiceConnect" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect"></a>

```csharp
public bool|IResolvable EnablePrivateServiceConnect { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, the IndexEndpoint is created without private service access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#enable_private_service_connect GoogleVertexAiIndexEndpoint#enable_private_service_connect}

---

##### `ProjectAllowlist`<sup>Optional</sup> <a name="ProjectAllowlist" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.projectAllowlist"></a>

```csharp
public string[] ProjectAllowlist { get; set; }
```

- *Type:* string[]

A list of Projects from which the forwarding rule will target the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#project_allowlist GoogleVertexAiIndexEndpoint#project_allowlist}

---

##### `PscAutomationConfigs`<sup>Optional</sup> <a name="PscAutomationConfigs" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.pscAutomationConfigs"></a>

```csharp
public IResolvable|GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs[] PscAutomationConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>[]

psc_automation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#psc_automation_configs GoogleVertexAiIndexEndpoint#psc_automation_configs}

---

### GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs <a name="GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs {
    string Network,
    string ProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.network">Network</a></code> | <code>string</code> | The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/get): projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.projectId">ProjectId</a></code> | <code>string</code> | Project id used to create forwarding rule. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/get): projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#network GoogleVertexAiIndexEndpoint#network}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Project id used to create forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#project_id GoogleVertexAiIndexEndpoint#project_id}

---

### GoogleVertexAiIndexEndpointTimeouts <a name="GoogleVertexAiIndexEndpointTimeouts" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiIndexEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#create GoogleVertexAiIndexEndpoint#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#delete GoogleVertexAiIndexEndpoint#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#update GoogleVertexAiIndexEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#create GoogleVertexAiIndexEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#delete GoogleVertexAiIndexEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_index_endpoint#update GoogleVertexAiIndexEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiIndexEndpointEncryptionSpecOutputReference <a name="GoogleVertexAiIndexEndpointEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiIndexEndpointEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec">GoogleVertexAiIndexEndpointEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiIndexEndpointEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec">GoogleVertexAiIndexEndpointEncryptionSpec</a>

---


### GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference <a name="GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.putPscAutomationConfigs">PutPscAutomationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist">ResetProjectAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetPscAutomationConfigs">ResetPscAutomationConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPscAutomationConfigs` <a name="PutPscAutomationConfigs" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.putPscAutomationConfigs"></a>

```csharp
private void PutPscAutomationConfigs(IResolvable|GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.putPscAutomationConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>[]

---

##### `ResetProjectAllowlist` <a name="ResetProjectAllowlist" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist"></a>

```csharp
private void ResetProjectAllowlist()
```

##### `ResetPscAutomationConfigs` <a name="ResetPscAutomationConfigs" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetPscAutomationConfigs"></a>

```csharp
private void ResetPscAutomationConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigs">PscAutomationConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput">EnablePrivateServiceConnectInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput">ProjectAllowlistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigsInput">PscAutomationConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect">EnablePrivateServiceConnect</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist">ProjectAllowlist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PscAutomationConfigs`<sup>Required</sup> <a name="PscAutomationConfigs" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigs"></a>

```csharp
public GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList PscAutomationConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList</a>

---

##### `EnablePrivateServiceConnectInput`<sup>Optional</sup> <a name="EnablePrivateServiceConnectInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput"></a>

```csharp
public bool|IResolvable EnablePrivateServiceConnectInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectAllowlistInput`<sup>Optional</sup> <a name="ProjectAllowlistInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput"></a>

```csharp
public string[] ProjectAllowlistInput { get; }
```

- *Type:* string[]

---

##### `PscAutomationConfigsInput`<sup>Optional</sup> <a name="PscAutomationConfigsInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigsInput"></a>

```csharp
public IResolvable|GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs[] PscAutomationConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>[]

---

##### `EnablePrivateServiceConnect`<sup>Required</sup> <a name="EnablePrivateServiceConnect" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect"></a>

```csharp
public bool|IResolvable EnablePrivateServiceConnect { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectAllowlist`<sup>Required</sup> <a name="ProjectAllowlist" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist"></a>

```csharp
public string[] ProjectAllowlist { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiIndexEndpointPrivateServiceConnectConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a>

---


### GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList <a name="GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.get"></a>

```csharp
private GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>[]

---


### GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference <a name="GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs</a>

---


### GoogleVertexAiIndexEndpointTimeoutsOutputReference <a name="GoogleVertexAiIndexEndpointTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiIndexEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiIndexEndpointTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a>

---



