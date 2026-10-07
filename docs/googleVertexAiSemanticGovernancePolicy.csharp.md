# `googleVertexAiSemanticGovernancePolicy` Submodule <a name="`googleVertexAiSemanticGovernancePolicy` Submodule" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiSemanticGovernancePolicy <a name="GoogleVertexAiSemanticGovernancePolicy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy google_vertex_ai_semantic_governance_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiSemanticGovernancePolicy(Construct Scope, string Id, GoogleVertexAiSemanticGovernancePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig">GoogleVertexAiSemanticGovernancePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig">GoogleVertexAiSemanticGovernancePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putAgentResponseCustomization">PutAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putMcpTools">PutMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetAgentResponseCustomization">ResetAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetMcpTools">ResetMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAgentResponseCustomization` <a name="PutAgentResponseCustomization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putAgentResponseCustomization"></a>

```csharp
private void PutAgentResponseCustomization(GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putAgentResponseCustomization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---

##### `PutMcpTools` <a name="PutMcpTools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putMcpTools"></a>

```csharp
private void PutMcpTools(GoogleVertexAiSemanticGovernancePolicyMcpTools Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putMcpTools.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVertexAiSemanticGovernancePolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a>

---

##### `ResetAgentResponseCustomization` <a name="ResetAgentResponseCustomization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetAgentResponseCustomization"></a>

```csharp
private void ResetAgentResponseCustomization()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMcpTools` <a name="ResetMcpTools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetMcpTools"></a>

```csharp
private void ResetMcpTools()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiSemanticGovernancePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiSemanticGovernancePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiSemanticGovernancePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiSemanticGovernancePolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiSemanticGovernancePolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleVertexAiSemanticGovernancePolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiSemanticGovernancePolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiSemanticGovernancePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiSemanticGovernancePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentIdentity">AgentIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentResponseCustomization">AgentResponseCustomization</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.mcpTools">McpTools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference">GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference">GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentInput">AgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentResponseCustomizationInput">AgentResponseCustomizationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.mcpToolsInput">McpToolsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.naturalLanguageConstraintInput">NaturalLanguageConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyIdInput">SemanticGovernancePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agent">Agent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.naturalLanguageConstraint">NaturalLanguageConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyId">SemanticGovernancePolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentIdentity`<sup>Required</sup> <a name="AgentIdentity" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentIdentity"></a>

```csharp
public string AgentIdentity { get; }
```

- *Type:* string

---

##### `AgentResponseCustomization`<sup>Required</sup> <a name="AgentResponseCustomization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentResponseCustomization"></a>

```csharp
public GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference AgentResponseCustomization { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `McpTools`<sup>Required</sup> <a name="McpTools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.mcpTools"></a>

```csharp
public GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference McpTools { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference">GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.timeouts"></a>

```csharp
public GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference">GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AgentInput`<sup>Optional</sup> <a name="AgentInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentInput"></a>

```csharp
public string AgentInput { get; }
```

- *Type:* string

---

##### `AgentResponseCustomizationInput`<sup>Optional</sup> <a name="AgentResponseCustomizationInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentResponseCustomizationInput"></a>

```csharp
public GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization AgentResponseCustomizationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `McpToolsInput`<sup>Optional</sup> <a name="McpToolsInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.mcpToolsInput"></a>

```csharp
public GoogleVertexAiSemanticGovernancePolicyMcpTools McpToolsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a>

---

##### `NaturalLanguageConstraintInput`<sup>Optional</sup> <a name="NaturalLanguageConstraintInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.naturalLanguageConstraintInput"></a>

```csharp
public string NaturalLanguageConstraintInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SemanticGovernancePolicyIdInput`<sup>Optional</sup> <a name="SemanticGovernancePolicyIdInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyIdInput"></a>

```csharp
public string SemanticGovernancePolicyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleVertexAiSemanticGovernancePolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a>

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agent"></a>

```csharp
public string Agent { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NaturalLanguageConstraint`<sup>Required</sup> <a name="NaturalLanguageConstraint" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.naturalLanguageConstraint"></a>

```csharp
public string NaturalLanguageConstraint { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SemanticGovernancePolicyId`<sup>Required</sup> <a name="SemanticGovernancePolicyId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyId"></a>

```csharp
public string SemanticGovernancePolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization <a name="GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization {
    string DenialMessage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization.property.denialMessage">DenialMessage</a></code> | <code>string</code> | Custom message shown to the end user when the policy check results in a denial. |

---

##### `DenialMessage`<sup>Optional</sup> <a name="DenialMessage" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization.property.denialMessage"></a>

```csharp
public string DenialMessage { get; set; }
```

- *Type:* string

Custom message shown to the end user when the policy check results in a denial.

Use this
to explain the rationale to the user. Max 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#denial_message GoogleVertexAiSemanticGovernancePolicy#denial_message}

---

### GoogleVertexAiSemanticGovernancePolicyConfig <a name="GoogleVertexAiSemanticGovernancePolicyConfig" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiSemanticGovernancePolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Agent,
    string NaturalLanguageConstraint,
    string SemanticGovernancePolicyId,
    GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization AgentResponseCustomization = null,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    GoogleVertexAiSemanticGovernancePolicyMcpTools McpTools = null,
    string Project = null,
    string Region = null,
    GoogleVertexAiSemanticGovernancePolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.agent">Agent</a></code> | <code>string</code> | The name of the agent in Agent Registry that is affected by this policy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.naturalLanguageConstraint">NaturalLanguageConstraint</a></code> | <code>string</code> | The natural language constraint of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.semanticGovernancePolicyId">SemanticGovernancePolicyId</a></code> | <code>string</code> | The ID of the SemanticGovernancePolicy, which will become the final component of the resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.agentResponseCustomization">AgentResponseCustomization</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | agent_response_customization block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.description">Description</a></code> | <code>string</code> | The description of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user-defined name of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#id GoogleVertexAiSemanticGovernancePolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.mcpTools">McpTools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a></code> | mcp_tools block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#project GoogleVertexAiSemanticGovernancePolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.region">Region</a></code> | <code>string</code> | The region of the SemanticGovernancePolicy, e.g. 'us-central1'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.agent"></a>

```csharp
public string Agent { get; set; }
```

- *Type:* string

The name of the agent in Agent Registry that is affected by this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#agent GoogleVertexAiSemanticGovernancePolicy#agent}

---

##### `NaturalLanguageConstraint`<sup>Required</sup> <a name="NaturalLanguageConstraint" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.naturalLanguageConstraint"></a>

```csharp
public string NaturalLanguageConstraint { get; set; }
```

- *Type:* string

The natural language constraint of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#natural_language_constraint GoogleVertexAiSemanticGovernancePolicy#natural_language_constraint}

---

##### `SemanticGovernancePolicyId`<sup>Required</sup> <a name="SemanticGovernancePolicyId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.semanticGovernancePolicyId"></a>

```csharp
public string SemanticGovernancePolicyId { get; set; }
```

- *Type:* string

The ID of the SemanticGovernancePolicy, which will become the final component of the resource name.

This value may be up to 63 characters, and valid characters are [a-z0-9-]. The first character cannot be a number or hyphen. The last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#semantic_governance_policy_id GoogleVertexAiSemanticGovernancePolicy#semantic_governance_policy_id}

---

##### `AgentResponseCustomization`<sup>Optional</sup> <a name="AgentResponseCustomization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.agentResponseCustomization"></a>

```csharp
public GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization AgentResponseCustomization { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

agent_response_customization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#agent_response_customization GoogleVertexAiSemanticGovernancePolicy#agent_response_customization}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#deletion_policy GoogleVertexAiSemanticGovernancePolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#description GoogleVertexAiSemanticGovernancePolicy#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-defined name of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#display_name GoogleVertexAiSemanticGovernancePolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#id GoogleVertexAiSemanticGovernancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `McpTools`<sup>Optional</sup> <a name="McpTools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.mcpTools"></a>

```csharp
public GoogleVertexAiSemanticGovernancePolicyMcpTools McpTools { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a>

mcp_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#mcp_tools GoogleVertexAiSemanticGovernancePolicy#mcp_tools}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#project GoogleVertexAiSemanticGovernancePolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the SemanticGovernancePolicy, e.g. 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#region GoogleVertexAiSemanticGovernancePolicy#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.timeouts"></a>

```csharp
public GoogleVertexAiSemanticGovernancePolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#timeouts GoogleVertexAiSemanticGovernancePolicy#timeouts}

---

### GoogleVertexAiSemanticGovernancePolicyMcpTools <a name="GoogleVertexAiSemanticGovernancePolicyMcpTools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiSemanticGovernancePolicyMcpTools {
    string McpServer,
    string[] Tools
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools.property.mcpServer">McpServer</a></code> | <code>string</code> | The resource name of the McpServer in Agent Registry that is affected by this policy. Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools.property.tools">Tools</a></code> | <code>string[]</code> | The resource names of the McpTools used by the Agent that is affected by this policy. |

---

##### `McpServer`<sup>Required</sup> <a name="McpServer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools.property.mcpServer"></a>

```csharp
public string McpServer { get; set; }
```

- *Type:* string

The resource name of the McpServer in Agent Registry that is affected by this policy. Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#mcp_server GoogleVertexAiSemanticGovernancePolicy#mcp_server}

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools.property.tools"></a>

```csharp
public string[] Tools { get; set; }
```

- *Type:* string[]

The resource names of the McpTools used by the Agent that is affected by this policy.

At least one tool must be listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#tools GoogleVertexAiSemanticGovernancePolicy#tools}

---

### GoogleVertexAiSemanticGovernancePolicyTimeouts <a name="GoogleVertexAiSemanticGovernancePolicyTimeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiSemanticGovernancePolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#create GoogleVertexAiSemanticGovernancePolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#delete GoogleVertexAiSemanticGovernancePolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#update GoogleVertexAiSemanticGovernancePolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#create GoogleVertexAiSemanticGovernancePolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#delete GoogleVertexAiSemanticGovernancePolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#update GoogleVertexAiSemanticGovernancePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference <a name="GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resetDenialMessage">ResetDenialMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDenialMessage` <a name="ResetDenialMessage" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resetDenialMessage"></a>

```csharp
private void ResetDenialMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessageInput">DenialMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessage">DenialMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DenialMessageInput`<sup>Optional</sup> <a name="DenialMessageInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessageInput"></a>

```csharp
public string DenialMessageInput { get; }
```

- *Type:* string

---

##### `DenialMessage`<sup>Required</sup> <a name="DenialMessage" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessage"></a>

```csharp
public string DenialMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---


### GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference <a name="GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServerInput">McpServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.toolsInput">ToolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServer">McpServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.tools">Tools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `McpServerInput`<sup>Optional</sup> <a name="McpServerInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServerInput"></a>

```csharp
public string McpServerInput { get; }
```

- *Type:* string

---

##### `ToolsInput`<sup>Optional</sup> <a name="ToolsInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.toolsInput"></a>

```csharp
public string[] ToolsInput { get; }
```

- *Type:* string[]

---

##### `McpServer`<sup>Required</sup> <a name="McpServer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServer"></a>

```csharp
public string McpServer { get; }
```

- *Type:* string

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.tools"></a>

```csharp
public string[] Tools { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiSemanticGovernancePolicyMcpTools InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a>

---


### GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference <a name="GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiSemanticGovernancePolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a>

---



