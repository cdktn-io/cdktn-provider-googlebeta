# `googleVertexAiReasoningEngineIamBinding` Submodule <a name="`googleVertexAiReasoningEngineIamBinding` Submodule" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiReasoningEngineIamBinding <a name="GoogleVertexAiReasoningEngineIamBinding" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding google_vertex_ai_reasoning_engine_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiReasoningEngineIamBinding(Construct Scope, string Id, GoogleVertexAiReasoningEngineIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig">GoogleVertexAiReasoningEngineIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig">GoogleVertexAiReasoningEngineIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleVertexAiReasoningEngineIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingCondition">GoogleVertexAiReasoningEngineIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiReasoningEngineIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiReasoningEngineIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiReasoningEngineIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiReasoningEngineIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiReasoningEngineIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleVertexAiReasoningEngineIamBinding resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiReasoningEngineIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiReasoningEngineIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiReasoningEngineIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference">GoogleVertexAiReasoningEngineIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingCondition">GoogleVertexAiReasoningEngineIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.reasoningEngineInput">ReasoningEngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.reasoningEngine">ReasoningEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.condition"></a>

```csharp
public GoogleVertexAiReasoningEngineIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference">GoogleVertexAiReasoningEngineIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.conditionInput"></a>

```csharp
public GoogleVertexAiReasoningEngineIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingCondition">GoogleVertexAiReasoningEngineIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReasoningEngineInput`<sup>Optional</sup> <a name="ReasoningEngineInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.reasoningEngineInput"></a>

```csharp
public string ReasoningEngineInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReasoningEngine`<sup>Required</sup> <a name="ReasoningEngine" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.reasoningEngine"></a>

```csharp
public string ReasoningEngine { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiReasoningEngineIamBindingCondition <a name="GoogleVertexAiReasoningEngineIamBindingCondition" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiReasoningEngineIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#expression GoogleVertexAiReasoningEngineIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#title GoogleVertexAiReasoningEngineIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#description GoogleVertexAiReasoningEngineIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#expression GoogleVertexAiReasoningEngineIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#title GoogleVertexAiReasoningEngineIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#description GoogleVertexAiReasoningEngineIamBinding#description}.

---

### GoogleVertexAiReasoningEngineIamBindingConfig <a name="GoogleVertexAiReasoningEngineIamBindingConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiReasoningEngineIamBindingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] Members,
    string ReasoningEngine,
    string Role,
    GoogleVertexAiReasoningEngineIamBindingCondition Condition = null,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#members GoogleVertexAiReasoningEngineIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.reasoningEngine">ReasoningEngine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#reasoning_engine GoogleVertexAiReasoningEngineIamBinding#reasoning_engine}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#role GoogleVertexAiReasoningEngineIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingCondition">GoogleVertexAiReasoningEngineIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#id GoogleVertexAiReasoningEngineIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#project GoogleVertexAiReasoningEngineIamBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#region GoogleVertexAiReasoningEngineIamBinding#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#members GoogleVertexAiReasoningEngineIamBinding#members}.

---

##### `ReasoningEngine`<sup>Required</sup> <a name="ReasoningEngine" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.reasoningEngine"></a>

```csharp
public string ReasoningEngine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#reasoning_engine GoogleVertexAiReasoningEngineIamBinding#reasoning_engine}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#role GoogleVertexAiReasoningEngineIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.condition"></a>

```csharp
public GoogleVertexAiReasoningEngineIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingCondition">GoogleVertexAiReasoningEngineIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#condition GoogleVertexAiReasoningEngineIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#id GoogleVertexAiReasoningEngineIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#project GoogleVertexAiReasoningEngineIamBinding#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vertex_ai_reasoning_engine_iam_binding#region GoogleVertexAiReasoningEngineIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiReasoningEngineIamBindingConditionOutputReference <a name="GoogleVertexAiReasoningEngineIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiReasoningEngineIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingCondition">GoogleVertexAiReasoningEngineIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiReasoningEngineIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngineIamBinding.GoogleVertexAiReasoningEngineIamBindingCondition">GoogleVertexAiReasoningEngineIamBindingCondition</a>

---



