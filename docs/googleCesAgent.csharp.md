# `googleCesAgent` Submodule <a name="`googleCesAgent` Submodule" id="@cdktn/provider-google-beta.googleCesAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesAgent <a name="GoogleCesAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent google_ces_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgent(Construct Scope, string Id, GoogleCesAgentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig">GoogleCesAgentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig">GoogleCesAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterAgentCallbacks">PutAfterAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterModelCallbacks">PutAfterModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterToolCallbacks">PutAfterToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeAgentCallbacks">PutBeforeAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeModelCallbacks">PutBeforeModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeToolCallbacks">PutBeforeToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putLlmAgent">PutLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putModelSettings">PutModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteA2AAgent">PutRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent">PutRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putToolsets">PutToolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTransferRules">PutTransferRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterAgentCallbacks">ResetAfterAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterModelCallbacks">ResetAfterModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterToolCallbacks">ResetAfterToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAgentId">ResetAgentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeAgentCallbacks">ResetBeforeAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeModelCallbacks">ResetBeforeModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeToolCallbacks">ResetBeforeToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetChildAgents">ResetChildAgents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetGuardrails">ResetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetLlmAgent">ResetLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetModelSettings">ResetModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteA2AAgent">ResetRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteDialogflowAgent">ResetRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTools">ResetTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetToolsets">ResetToolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTransferRules">ResetTransferRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAfterAgentCallbacks` <a name="PutAfterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterAgentCallbacks"></a>

```csharp
private void PutAfterAgentCallbacks(IResolvable|GoogleCesAgentAfterAgentCallbacks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterAgentCallbacks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>[]

---

##### `PutAfterModelCallbacks` <a name="PutAfterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterModelCallbacks"></a>

```csharp
private void PutAfterModelCallbacks(IResolvable|GoogleCesAgentAfterModelCallbacks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterModelCallbacks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>[]

---

##### `PutAfterToolCallbacks` <a name="PutAfterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterToolCallbacks"></a>

```csharp
private void PutAfterToolCallbacks(IResolvable|GoogleCesAgentAfterToolCallbacks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterToolCallbacks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>[]

---

##### `PutBeforeAgentCallbacks` <a name="PutBeforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeAgentCallbacks"></a>

```csharp
private void PutBeforeAgentCallbacks(IResolvable|GoogleCesAgentBeforeAgentCallbacks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeAgentCallbacks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>[]

---

##### `PutBeforeModelCallbacks` <a name="PutBeforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeModelCallbacks"></a>

```csharp
private void PutBeforeModelCallbacks(IResolvable|GoogleCesAgentBeforeModelCallbacks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeModelCallbacks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>[]

---

##### `PutBeforeToolCallbacks` <a name="PutBeforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeToolCallbacks"></a>

```csharp
private void PutBeforeToolCallbacks(IResolvable|GoogleCesAgentBeforeToolCallbacks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeToolCallbacks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>[]

---

##### `PutLlmAgent` <a name="PutLlmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putLlmAgent"></a>

```csharp
private void PutLlmAgent(GoogleCesAgentLlmAgent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putLlmAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

---

##### `PutModelSettings` <a name="PutModelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putModelSettings"></a>

```csharp
private void PutModelSettings(GoogleCesAgentModelSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

---

##### `PutRemoteA2AAgent` <a name="PutRemoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteA2AAgent"></a>

```csharp
private void PutRemoteA2AAgent(GoogleCesAgentRemoteA2AAgent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteA2AAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

---

##### `PutRemoteDialogflowAgent` <a name="PutRemoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent"></a>

```csharp
private void PutRemoteDialogflowAgent(GoogleCesAgentRemoteDialogflowAgent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCesAgentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

---

##### `PutToolsets` <a name="PutToolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putToolsets"></a>

```csharp
private void PutToolsets(IResolvable|GoogleCesAgentToolsets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putToolsets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>[]

---

##### `PutTransferRules` <a name="PutTransferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTransferRules"></a>

```csharp
private void PutTransferRules(IResolvable|GoogleCesAgentTransferRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTransferRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>[]

---

##### `ResetAfterAgentCallbacks` <a name="ResetAfterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterAgentCallbacks"></a>

```csharp
private void ResetAfterAgentCallbacks()
```

##### `ResetAfterModelCallbacks` <a name="ResetAfterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterModelCallbacks"></a>

```csharp
private void ResetAfterModelCallbacks()
```

##### `ResetAfterToolCallbacks` <a name="ResetAfterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterToolCallbacks"></a>

```csharp
private void ResetAfterToolCallbacks()
```

##### `ResetAgentId` <a name="ResetAgentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAgentId"></a>

```csharp
private void ResetAgentId()
```

##### `ResetBeforeAgentCallbacks` <a name="ResetBeforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeAgentCallbacks"></a>

```csharp
private void ResetBeforeAgentCallbacks()
```

##### `ResetBeforeModelCallbacks` <a name="ResetBeforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeModelCallbacks"></a>

```csharp
private void ResetBeforeModelCallbacks()
```

##### `ResetBeforeToolCallbacks` <a name="ResetBeforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeToolCallbacks"></a>

```csharp
private void ResetBeforeToolCallbacks()
```

##### `ResetChildAgents` <a name="ResetChildAgents" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetChildAgents"></a>

```csharp
private void ResetChildAgents()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGuardrails` <a name="ResetGuardrails" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetGuardrails"></a>

```csharp
private void ResetGuardrails()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetInstruction"></a>

```csharp
private void ResetInstruction()
```

##### `ResetLlmAgent` <a name="ResetLlmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetLlmAgent"></a>

```csharp
private void ResetLlmAgent()
```

##### `ResetModelSettings` <a name="ResetModelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetModelSettings"></a>

```csharp
private void ResetModelSettings()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRemoteA2AAgent` <a name="ResetRemoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteA2AAgent"></a>

```csharp
private void ResetRemoteA2AAgent()
```

##### `ResetRemoteDialogflowAgent` <a name="ResetRemoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteDialogflowAgent"></a>

```csharp
private void ResetRemoteDialogflowAgent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTools` <a name="ResetTools" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTools"></a>

```csharp
private void ResetTools()
```

##### `ResetToolsets` <a name="ResetToolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetToolsets"></a>

```csharp
private void ResetToolsets()
```

##### `ResetTransferRules` <a name="ResetTransferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTransferRules"></a>

```csharp
private void ResetTransferRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesAgent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesAgent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesAgent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesAgent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleCesAgent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCesAgent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCesAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacks">AfterAgentCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList">GoogleCesAgentAfterAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacks">AfterModelCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList">GoogleCesAgentAfterModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacks">AfterToolCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList">GoogleCesAgentAfterToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacks">BeforeAgentCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList">GoogleCesAgentBeforeAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacks">BeforeModelCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList">GoogleCesAgentBeforeModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacks">BeforeToolCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList">GoogleCesAgentBeforeToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.generatedSummary">GeneratedSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgent">LlmAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference">GoogleCesAgentLlmAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference">GoogleCesAgentModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgent">RemoteA2AAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference">GoogleCesAgentRemoteA2AAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgent">RemoteDialogflowAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference">GoogleCesAgentRemoteDialogflowAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference">GoogleCesAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsets">Toolsets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList">GoogleCesAgentToolsetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRules">TransferRules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList">GoogleCesAgentTransferRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacksInput">AfterAgentCallbacksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacksInput">AfterModelCallbacksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacksInput">AfterToolCallbacksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentIdInput">AgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.appInput">AppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacksInput">BeforeAgentCallbacksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacksInput">BeforeModelCallbacksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacksInput">BeforeToolCallbacksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgentsInput">ChildAgentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrailsInput">GuardrailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instructionInput">InstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgentInput">LlmAgentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettingsInput">ModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgentInput">RemoteA2AAgentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgentInput">RemoteDialogflowAgentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsetsInput">ToolsetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsInput">ToolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRulesInput">TransferRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.app">App</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgents">ChildAgents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrails">Guardrails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instruction">Instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tools">Tools</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AfterAgentCallbacks`<sup>Required</sup> <a name="AfterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacks"></a>

```csharp
public GoogleCesAgentAfterAgentCallbacksList AfterAgentCallbacks { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList">GoogleCesAgentAfterAgentCallbacksList</a>

---

##### `AfterModelCallbacks`<sup>Required</sup> <a name="AfterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacks"></a>

```csharp
public GoogleCesAgentAfterModelCallbacksList AfterModelCallbacks { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList">GoogleCesAgentAfterModelCallbacksList</a>

---

##### `AfterToolCallbacks`<sup>Required</sup> <a name="AfterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacks"></a>

```csharp
public GoogleCesAgentAfterToolCallbacksList AfterToolCallbacks { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList">GoogleCesAgentAfterToolCallbacksList</a>

---

##### `BeforeAgentCallbacks`<sup>Required</sup> <a name="BeforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacks"></a>

```csharp
public GoogleCesAgentBeforeAgentCallbacksList BeforeAgentCallbacks { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList">GoogleCesAgentBeforeAgentCallbacksList</a>

---

##### `BeforeModelCallbacks`<sup>Required</sup> <a name="BeforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacks"></a>

```csharp
public GoogleCesAgentBeforeModelCallbacksList BeforeModelCallbacks { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList">GoogleCesAgentBeforeModelCallbacksList</a>

---

##### `BeforeToolCallbacks`<sup>Required</sup> <a name="BeforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacks"></a>

```csharp
public GoogleCesAgentBeforeToolCallbacksList BeforeToolCallbacks { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList">GoogleCesAgentBeforeToolCallbacksList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `GeneratedSummary`<sup>Required</sup> <a name="GeneratedSummary" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.generatedSummary"></a>

```csharp
public string GeneratedSummary { get; }
```

- *Type:* string

---

##### `LlmAgent`<sup>Required</sup> <a name="LlmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgent"></a>

```csharp
public GoogleCesAgentLlmAgentOutputReference LlmAgent { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference">GoogleCesAgentLlmAgentOutputReference</a>

---

##### `ModelSettings`<sup>Required</sup> <a name="ModelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettings"></a>

```csharp
public GoogleCesAgentModelSettingsOutputReference ModelSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference">GoogleCesAgentModelSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RemoteA2AAgent`<sup>Required</sup> <a name="RemoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgent"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentOutputReference RemoteA2AAgent { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference">GoogleCesAgentRemoteA2AAgentOutputReference</a>

---

##### `RemoteDialogflowAgent`<sup>Required</sup> <a name="RemoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgent"></a>

```csharp
public GoogleCesAgentRemoteDialogflowAgentOutputReference RemoteDialogflowAgent { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference">GoogleCesAgentRemoteDialogflowAgentOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeouts"></a>

```csharp
public GoogleCesAgentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference">GoogleCesAgentTimeoutsOutputReference</a>

---

##### `Toolsets`<sup>Required</sup> <a name="Toolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsets"></a>

```csharp
public GoogleCesAgentToolsetsList Toolsets { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList">GoogleCesAgentToolsetsList</a>

---

##### `TransferRules`<sup>Required</sup> <a name="TransferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRules"></a>

```csharp
public GoogleCesAgentTransferRulesList TransferRules { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList">GoogleCesAgentTransferRulesList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AfterAgentCallbacksInput`<sup>Optional</sup> <a name="AfterAgentCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacksInput"></a>

```csharp
public IResolvable|GoogleCesAgentAfterAgentCallbacks[] AfterAgentCallbacksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>[]

---

##### `AfterModelCallbacksInput`<sup>Optional</sup> <a name="AfterModelCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacksInput"></a>

```csharp
public IResolvable|GoogleCesAgentAfterModelCallbacks[] AfterModelCallbacksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>[]

---

##### `AfterToolCallbacksInput`<sup>Optional</sup> <a name="AfterToolCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacksInput"></a>

```csharp
public IResolvable|GoogleCesAgentAfterToolCallbacks[] AfterToolCallbacksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>[]

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentIdInput"></a>

```csharp
public string AgentIdInput { get; }
```

- *Type:* string

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.appInput"></a>

```csharp
public string AppInput { get; }
```

- *Type:* string

---

##### `BeforeAgentCallbacksInput`<sup>Optional</sup> <a name="BeforeAgentCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacksInput"></a>

```csharp
public IResolvable|GoogleCesAgentBeforeAgentCallbacks[] BeforeAgentCallbacksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>[]

---

##### `BeforeModelCallbacksInput`<sup>Optional</sup> <a name="BeforeModelCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacksInput"></a>

```csharp
public IResolvable|GoogleCesAgentBeforeModelCallbacks[] BeforeModelCallbacksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>[]

---

##### `BeforeToolCallbacksInput`<sup>Optional</sup> <a name="BeforeToolCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacksInput"></a>

```csharp
public IResolvable|GoogleCesAgentBeforeToolCallbacks[] BeforeToolCallbacksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>[]

---

##### `ChildAgentsInput`<sup>Optional</sup> <a name="ChildAgentsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgentsInput"></a>

```csharp
public string[] ChildAgentsInput { get; }
```

- *Type:* string[]

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GuardrailsInput`<sup>Optional</sup> <a name="GuardrailsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrailsInput"></a>

```csharp
public string[] GuardrailsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instructionInput"></a>

```csharp
public string InstructionInput { get; }
```

- *Type:* string

---

##### `LlmAgentInput`<sup>Optional</sup> <a name="LlmAgentInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgentInput"></a>

```csharp
public GoogleCesAgentLlmAgent LlmAgentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ModelSettingsInput`<sup>Optional</sup> <a name="ModelSettingsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettingsInput"></a>

```csharp
public GoogleCesAgentModelSettings ModelSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RemoteA2AAgentInput`<sup>Optional</sup> <a name="RemoteA2AAgentInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgentInput"></a>

```csharp
public GoogleCesAgentRemoteA2AAgent RemoteA2AAgentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

---

##### `RemoteDialogflowAgentInput`<sup>Optional</sup> <a name="RemoteDialogflowAgentInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgentInput"></a>

```csharp
public GoogleCesAgentRemoteDialogflowAgent RemoteDialogflowAgentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleCesAgentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

---

##### `ToolsetsInput`<sup>Optional</sup> <a name="ToolsetsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsetsInput"></a>

```csharp
public IResolvable|GoogleCesAgentToolsets[] ToolsetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>[]

---

##### `ToolsInput`<sup>Optional</sup> <a name="ToolsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsInput"></a>

```csharp
public string[] ToolsInput { get; }
```

- *Type:* string[]

---

##### `TransferRulesInput`<sup>Optional</sup> <a name="TransferRulesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRulesInput"></a>

```csharp
public IResolvable|GoogleCesAgentTransferRules[] TransferRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>[]

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.app"></a>

```csharp
public string App { get; }
```

- *Type:* string

---

##### `ChildAgents`<sup>Required</sup> <a name="ChildAgents" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgents"></a>

```csharp
public string[] ChildAgents { get; }
```

- *Type:* string[]

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Guardrails`<sup>Required</sup> <a name="Guardrails" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrails"></a>

```csharp
public string[] Guardrails { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instruction"></a>

```csharp
public string Instruction { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tools"></a>

```csharp
public string[] Tools { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesAgentAfterAgentCallbacks <a name="GoogleCesAgentAfterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentAfterAgentCallbacks {
    string PythonCode,
    string Description = null,
    bool|IResolvable Disabled = null,
    bool|IResolvable ProactiveExecutionEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.pythonCode">PythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.description">Description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `ProactiveExecutionEnabled`<sup>Optional</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentAfterModelCallbacks <a name="GoogleCesAgentAfterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentAfterModelCallbacks {
    string PythonCode,
    string Description = null,
    bool|IResolvable Disabled = null,
    bool|IResolvable ProactiveExecutionEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.pythonCode">PythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.description">Description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `ProactiveExecutionEnabled`<sup>Optional</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.proactiveExecutionEnabled"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentAfterToolCallbacks <a name="GoogleCesAgentAfterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentAfterToolCallbacks {
    string PythonCode,
    string Description = null,
    bool|IResolvable Disabled = null,
    bool|IResolvable ProactiveExecutionEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.pythonCode">PythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.description">Description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `ProactiveExecutionEnabled`<sup>Optional</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.proactiveExecutionEnabled"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentBeforeAgentCallbacks <a name="GoogleCesAgentBeforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentBeforeAgentCallbacks {
    string PythonCode,
    string Description = null,
    bool|IResolvable Disabled = null,
    bool|IResolvable ProactiveExecutionEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.pythonCode">PythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.description">Description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `ProactiveExecutionEnabled`<sup>Optional</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentBeforeModelCallbacks <a name="GoogleCesAgentBeforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentBeforeModelCallbacks {
    string PythonCode,
    string Description = null,
    bool|IResolvable Disabled = null,
    bool|IResolvable ProactiveExecutionEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.pythonCode">PythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.description">Description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `ProactiveExecutionEnabled`<sup>Optional</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentBeforeToolCallbacks <a name="GoogleCesAgentBeforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentBeforeToolCallbacks {
    string PythonCode,
    string Description = null,
    bool|IResolvable Disabled = null,
    bool|IResolvable ProactiveExecutionEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.pythonCode">PythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.description">Description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `ProactiveExecutionEnabled`<sup>Optional</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentConfig <a name="GoogleCesAgentConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string App,
    string DisplayName,
    string Location,
    IResolvable|GoogleCesAgentAfterAgentCallbacks[] AfterAgentCallbacks = null,
    IResolvable|GoogleCesAgentAfterModelCallbacks[] AfterModelCallbacks = null,
    IResolvable|GoogleCesAgentAfterToolCallbacks[] AfterToolCallbacks = null,
    string AgentId = null,
    IResolvable|GoogleCesAgentBeforeAgentCallbacks[] BeforeAgentCallbacks = null,
    IResolvable|GoogleCesAgentBeforeModelCallbacks[] BeforeModelCallbacks = null,
    IResolvable|GoogleCesAgentBeforeToolCallbacks[] BeforeToolCallbacks = null,
    string[] ChildAgents = null,
    string DeletionPolicy = null,
    string Description = null,
    string[] Guardrails = null,
    string Id = null,
    string Instruction = null,
    GoogleCesAgentLlmAgent LlmAgent = null,
    GoogleCesAgentModelSettings ModelSettings = null,
    string Project = null,
    GoogleCesAgentRemoteA2AAgent RemoteA2AAgent = null,
    GoogleCesAgentRemoteDialogflowAgent RemoteDialogflowAgent = null,
    GoogleCesAgentTimeouts Timeouts = null,
    string[] Tools = null,
    IResolvable|GoogleCesAgentToolsets[] Toolsets = null,
    IResolvable|GoogleCesAgentTransferRules[] TransferRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.app">App</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name of the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterAgentCallbacks">AfterAgentCallbacks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>[]</code> | after_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterModelCallbacks">AfterModelCallbacks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>[]</code> | after_model_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterToolCallbacks">AfterToolCallbacks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>[]</code> | after_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.agentId">AgentId</a></code> | <code>string</code> | The ID to use for the agent, which will become the final component of the agent's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeAgentCallbacks">BeforeAgentCallbacks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>[]</code> | before_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeModelCallbacks">BeforeModelCallbacks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>[]</code> | before_model_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeToolCallbacks">BeforeToolCallbacks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>[]</code> | before_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.childAgents">ChildAgents</a></code> | <code>string[]</code> | List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.description">Description</a></code> | <code>string</code> | Human-readable description of the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.guardrails">Guardrails</a></code> | <code>string[]</code> | List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.instruction">Instruction</a></code> | <code>string</code> | Instructions for the LLM model to guide the agent's behavior. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.llmAgent">LlmAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a></code> | llm_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#project GoogleCesAgent#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteA2AAgent">RemoteA2AAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a></code> | remote_a2a_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteDialogflowAgent">RemoteDialogflowAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a></code> | remote_dialogflow_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.tools">Tools</a></code> | <code>string[]</code> | List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.toolsets">Toolsets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>[]</code> | toolsets block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.transferRules">TransferRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>[]</code> | transfer_rules block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.app"></a>

```csharp
public string App { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#app GoogleCesAgent#app}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#display_name GoogleCesAgent#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#location GoogleCesAgent#location}

---

##### `AfterAgentCallbacks`<sup>Optional</sup> <a name="AfterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterAgentCallbacks"></a>

```csharp
public IResolvable|GoogleCesAgentAfterAgentCallbacks[] AfterAgentCallbacks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>[]

after_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_agent_callbacks GoogleCesAgent#after_agent_callbacks}

---

##### `AfterModelCallbacks`<sup>Optional</sup> <a name="AfterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterModelCallbacks"></a>

```csharp
public IResolvable|GoogleCesAgentAfterModelCallbacks[] AfterModelCallbacks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>[]

after_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_model_callbacks GoogleCesAgent#after_model_callbacks}

---

##### `AfterToolCallbacks`<sup>Optional</sup> <a name="AfterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterToolCallbacks"></a>

```csharp
public IResolvable|GoogleCesAgentAfterToolCallbacks[] AfterToolCallbacks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>[]

after_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_tool_callbacks GoogleCesAgent#after_tool_callbacks}

---

##### `AgentId`<sup>Optional</sup> <a name="AgentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.agentId"></a>

```csharp
public string AgentId { get; set; }
```

- *Type:* string

The ID to use for the agent, which will become the final component of the agent's resource name.

If not provided, a unique ID will be
automatically assigned for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_id GoogleCesAgent#agent_id}

---

##### `BeforeAgentCallbacks`<sup>Optional</sup> <a name="BeforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeAgentCallbacks"></a>

```csharp
public IResolvable|GoogleCesAgentBeforeAgentCallbacks[] BeforeAgentCallbacks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>[]

before_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_agent_callbacks GoogleCesAgent#before_agent_callbacks}

---

##### `BeforeModelCallbacks`<sup>Optional</sup> <a name="BeforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeModelCallbacks"></a>

```csharp
public IResolvable|GoogleCesAgentBeforeModelCallbacks[] BeforeModelCallbacks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>[]

before_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_model_callbacks GoogleCesAgent#before_model_callbacks}

---

##### `BeforeToolCallbacks`<sup>Optional</sup> <a name="BeforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeToolCallbacks"></a>

```csharp
public IResolvable|GoogleCesAgentBeforeToolCallbacks[] BeforeToolCallbacks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>[]

before_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_tool_callbacks GoogleCesAgent#before_tool_callbacks}

---

##### `ChildAgents`<sup>Optional</sup> <a name="ChildAgents" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.childAgents"></a>

```csharp
public string[] ChildAgents { get; set; }
```

- *Type:* string[]

List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#child_agents GoogleCesAgent#child_agents}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#deletion_policy GoogleCesAgent#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `Guardrails`<sup>Optional</sup> <a name="Guardrails" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.guardrails"></a>

```csharp
public string[] Guardrails { get; set; }
```

- *Type:* string[]

List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#guardrails GoogleCesAgent#guardrails}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.instruction"></a>

```csharp
public string Instruction { get; set; }
```

- *Type:* string

Instructions for the LLM model to guide the agent's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#instruction GoogleCesAgent#instruction}

---

##### `LlmAgent`<sup>Optional</sup> <a name="LlmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.llmAgent"></a>

```csharp
public GoogleCesAgentLlmAgent LlmAgent { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

llm_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#llm_agent GoogleCesAgent#llm_agent}

---

##### `ModelSettings`<sup>Optional</sup> <a name="ModelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.modelSettings"></a>

```csharp
public GoogleCesAgentModelSettings ModelSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#model_settings GoogleCesAgent#model_settings}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#project GoogleCesAgent#project}.

---

##### `RemoteA2AAgent`<sup>Optional</sup> <a name="RemoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteA2AAgent"></a>

```csharp
public GoogleCesAgentRemoteA2AAgent RemoteA2AAgent { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

remote_a2a_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#remote_a2a_agent GoogleCesAgent#remote_a2a_agent}

---

##### `RemoteDialogflowAgent`<sup>Optional</sup> <a name="RemoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteDialogflowAgent"></a>

```csharp
public GoogleCesAgentRemoteDialogflowAgent RemoteDialogflowAgent { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

remote_dialogflow_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#remote_dialogflow_agent GoogleCesAgent#remote_dialogflow_agent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.timeouts"></a>

```csharp
public GoogleCesAgentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#timeouts GoogleCesAgent#timeouts}

---

##### `Tools`<sup>Optional</sup> <a name="Tools" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.tools"></a>

```csharp
public string[] Tools { get; set; }
```

- *Type:* string[]

List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tools GoogleCesAgent#tools}

---

##### `Toolsets`<sup>Optional</sup> <a name="Toolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.toolsets"></a>

```csharp
public IResolvable|GoogleCesAgentToolsets[] Toolsets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>[]

toolsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#toolsets GoogleCesAgent#toolsets}

---

##### `TransferRules`<sup>Optional</sup> <a name="TransferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.transferRules"></a>

```csharp
public IResolvable|GoogleCesAgentTransferRules[] TransferRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>[]

transfer_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#transfer_rules GoogleCesAgent#transfer_rules}

---

### GoogleCesAgentLlmAgent <a name="GoogleCesAgentLlmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentLlmAgent {

};
```


### GoogleCesAgentModelSettings <a name="GoogleCesAgentModelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentModelSettings {
    string Model = null,
    double Temperature = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.model">Model</a></code> | <code>string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.temperature">Temperature</a></code> | <code>double</code> | If set, this temperature will be used for the LLM model. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#model GoogleCesAgent#model}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.temperature"></a>

```csharp
public double Temperature { get; set; }
```

- *Type:* double

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#temperature GoogleCesAgent#temperature}

---

### GoogleCesAgentRemoteA2AAgent <a name="GoogleCesAgentRemoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgent {
    GoogleCesAgentRemoteA2AAgentA2AConfig A2AConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent.property.a2AConfig">A2AConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a></code> | a2a_config block. |

---

##### `A2AConfig`<sup>Required</sup> <a name="A2AConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent.property.a2AConfig"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfig A2AConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

a2a_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#a2a_config GoogleCesAgent#a2a_config}

---

### GoogleCesAgentRemoteA2AAgentA2AConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfig {
    GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard AgentCard = null,
    string AgentRegistry = null,
    GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication ApiAuthentication = null,
    string ContextId = null,
    System.Collections.Generic.IDictionary<string, string> InputVariableMapping = null,
    System.Collections.Generic.IDictionary<string, string> OutputVariableMapping = null,
    bool|IResolvable StreamingEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentCard">AgentCard</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | agent_card block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentRegistry">AgentRegistry</a></code> | <code>string</code> | Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication">ApiAuthentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.contextId">ContextId</a></code> | <code>string</code> | If not empty, interactions with the remote A2A agent will use this context ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping">InputVariableMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mapping of input variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping">OutputVariableMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mapping of output variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled">StreamingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether streaming is enabled for the remote agent. |

---

##### `AgentCard`<sup>Optional</sup> <a name="AgentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentCard"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard AgentCard { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

agent_card block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_card GoogleCesAgent#agent_card}

---

##### `AgentRegistry`<sup>Optional</sup> <a name="AgentRegistry" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentRegistry"></a>

```csharp
public string AgentRegistry { get; set; }
```

- *Type:* string

Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_registry GoogleCesAgent#agent_registry}

---

##### `ApiAuthentication`<sup>Optional</sup> <a name="ApiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication ApiAuthentication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#api_authentication GoogleCesAgent#api_authentication}

---

##### `ContextId`<sup>Optional</sup> <a name="ContextId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.contextId"></a>

```csharp
public string ContextId { get; set; }
```

- *Type:* string

If not empty, interactions with the remote A2A agent will use this context ID.

This context_id field can refer to a session variable like
'$context.variables.order_agent_session_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#context_id GoogleCesAgent#context_id}

---

##### `InputVariableMapping`<sup>Optional</sup> <a name="InputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InputVariableMapping { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mapping of input variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#input_variable_mapping GoogleCesAgent#input_variable_mapping}

---

##### `OutputVariableMapping`<sup>Optional</sup> <a name="OutputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OutputVariableMapping { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mapping of output variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#output_variable_mapping GoogleCesAgent#output_variable_mapping}

---

##### `StreamingEnabled`<sup>Optional</sup> <a name="StreamingEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled"></a>

```csharp
public bool|IResolvable StreamingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether streaming is enabled for the remote agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#streaming_enabled GoogleCesAgent#streaming_enabled}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard {
    string Description,
    string Name,
    IResolvable|GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills[] Skills,
    IResolvable|GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[] SupportedInterfaces,
    string Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.description">Description</a></code> | <code>string</code> | A description of the agent's domain of action/solution space. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.name">Name</a></code> | <code>string</code> | A human-readable name for the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills">Skills</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]</code> | skills block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces">SupportedInterfaces</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]</code> | supported_interfaces block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.version">Version</a></code> | <code>string</code> | The version of the agent. |

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the agent's domain of action/solution space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A human-readable name for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#name GoogleCesAgent#name}

---

##### `Skills`<sup>Required</sup> <a name="Skills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills"></a>

```csharp
public IResolvable|GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills[] Skills { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]

skills block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#skills GoogleCesAgent#skills}

---

##### `SupportedInterfaces`<sup>Required</sup> <a name="SupportedInterfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces"></a>

```csharp
public IResolvable|GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[] SupportedInterfaces { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]

supported_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#supported_interfaces GoogleCesAgent#supported_interfaces}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#version GoogleCesAgent#version}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills {
    string Description,
    string Id,
    string Name,
    string[] Tags,
    string[] Examples = null,
    string[] InputModes = null,
    string[] OutputModes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description">Description</a></code> | <code>string</code> | A detailed description of the skill. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id">Id</a></code> | <code>string</code> | A unique identifier for the agent's skill. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name">Name</a></code> | <code>string</code> | A human-readable name for the skill. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags">Tags</a></code> | <code>string[]</code> | A set of keywords describing the skill's capabilities. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples">Examples</a></code> | <code>string[]</code> | Example prompts or scenarios that this skill can handle. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes">InputModes</a></code> | <code>string[]</code> | The set of supported input media types for this skill, overriding the agent's defaults. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes">OutputModes</a></code> | <code>string[]</code> | The set of supported output media types for this skill, overriding the agent's defaults. |

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A detailed description of the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

A unique identifier for the agent's skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A human-readable name for the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#name GoogleCesAgent#name}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A set of keywords describing the skill's capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tags GoogleCesAgent#tags}

---

##### `Examples`<sup>Optional</sup> <a name="Examples" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples"></a>

```csharp
public string[] Examples { get; set; }
```

- *Type:* string[]

Example prompts or scenarios that this skill can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#examples GoogleCesAgent#examples}

---

##### `InputModes`<sup>Optional</sup> <a name="InputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes"></a>

```csharp
public string[] InputModes { get; set; }
```

- *Type:* string[]

The set of supported input media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#input_modes GoogleCesAgent#input_modes}

---

##### `OutputModes`<sup>Optional</sup> <a name="OutputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes"></a>

```csharp
public string[] OutputModes { get; set; }
```

- *Type:* string[]

The set of supported output media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#output_modes GoogleCesAgent#output_modes}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces {
    string ProtocolBinding,
    string ProtocolVersion,
    string Url,
    string Tenant = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding">ProtocolBinding</a></code> | <code>string</code> | The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion">ProtocolVersion</a></code> | <code>string</code> | The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0". |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url">Url</a></code> | <code>string</code> | The URL where this interface is available. Must be a valid absolute HTTPS URL in production. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant">Tenant</a></code> | <code>string</code> | Tenant ID to be used in the request when calling the agent. |

---

##### `ProtocolBinding`<sup>Required</sup> <a name="ProtocolBinding" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding"></a>

```csharp
public string ProtocolBinding { get; set; }
```

- *Type:* string

The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#protocol_binding GoogleCesAgent#protocol_binding}

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion"></a>

```csharp
public string ProtocolVersion { get; set; }
```

- *Type:* string

The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#protocol_version GoogleCesAgent#protocol_version}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL where this interface is available. Must be a valid absolute HTTPS URL in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#url GoogleCesAgent#url}

---

##### `Tenant`<sup>Optional</sup> <a name="Tenant" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant"></a>

```csharp
public string Tenant { get; set; }
```

- *Type:* string

Tenant ID to be used in the request when calling the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tenant GoogleCesAgent#tenant}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication {
    GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig ApiKeyConfig = null,
    GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig BearerTokenConfig = null,
    GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig OauthConfig = null,
    GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig ServiceAccountAuthConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig">ServiceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |

---

##### `ApiKeyConfig`<sup>Optional</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig ApiKeyConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#api_key_config GoogleCesAgent#api_key_config}

---

##### `BearerTokenConfig`<sup>Optional</sup> <a name="BearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig BearerTokenConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#bearer_token_config GoogleCesAgent#bearer_token_config}

---

##### `OauthConfig`<sup>Optional</sup> <a name="OauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig OauthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#oauth_config GoogleCesAgent#oauth_config}

---

##### `ServiceAccountAuthConfig`<sup>Optional</sup> <a name="ServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig ServiceAccountAuthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#service_account_auth_config GoogleCesAgent#service_account_auth_config}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig {
    string ApiKeySecretVersion,
    string KeyName,
    string RequestLocation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName">KeyName</a></code> | <code>string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation">RequestLocation</a></code> | <code>string</code> | Key location in the request. Possible values: HEADER QUERY_STRING. |

---

##### `ApiKeySecretVersion`<sup>Required</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```csharp
public string ApiKeySecretVersion { get; set; }
```

- *Type:* string

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#api_key_secret_version GoogleCesAgent#api_key_secret_version}

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#key_name GoogleCesAgent#key_name}

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```csharp
public string RequestLocation { get; set; }
```

- *Type:* string

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#request_location GoogleCesAgent#request_location}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig {
    string Token
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token">Token</a></code> | <code>string</code> | The bearer token. Must be in the format '$context.variables.<name_of_variable>'. |

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

The bearer token. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#token GoogleCesAgent#token}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig {
    string ClientId,
    string ClientSecretVersion,
    string OauthGrantType,
    string TokenEndpoint,
    string[] Scopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion">ClientSecretVersion</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType">OauthGrantType</a></code> | <code>string</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#client_id GoogleCesAgent#client_id}

---

##### `ClientSecretVersion`<sup>Required</sup> <a name="ClientSecretVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```csharp
public string ClientSecretVersion { get; set; }
```

- *Type:* string

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#client_secret_version GoogleCesAgent#client_secret_version}

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```csharp
public string OauthGrantType { get; set; }
```

- *Type:* string

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#oauth_grant_type GoogleCesAgent#oauth_grant_type}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; set; }
```

- *Type:* string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#token_endpoint GoogleCesAgent#token_endpoint}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#scopes GoogleCesAgent#scopes}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig {
    string ServiceAccount,
    string[] Scopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#service_account GoogleCesAgent#service_account}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#scopes GoogleCesAgent#scopes}

---

### GoogleCesAgentRemoteDialogflowAgent <a name="GoogleCesAgentRemoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteDialogflowAgent {
    string Agent,
    string FlowId,
    string EnvironmentId = null,
    System.Collections.Generic.IDictionary<string, string> InputVariableMapping = null,
    string LanguageCodeVariable = null,
    System.Collections.Generic.IDictionary<string, string> OutputVariableMapping = null,
    bool|IResolvable RespectResponseInterruptionSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.agent">Agent</a></code> | <code>string</code> | The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.flowId">FlowId</a></code> | <code>string</code> | The flow ID of the flow in the Dialogflow agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.environmentId">EnvironmentId</a></code> | <code>string</code> | The environment ID of the Dialogflow agent be used for the agent execution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.inputVariableMapping">InputVariableMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.languageCodeVariable">LanguageCodeVariable</a></code> | <code>string</code> | The name of the variable that contains the language code to be used for the Dialogflow session. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.outputVariableMapping">OutputVariableMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings">RespectResponseInterruptionSettings</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent. |

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.agent"></a>

```csharp
public string Agent { get; set; }
```

- *Type:* string

The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent GoogleCesAgent#agent}

---

##### `FlowId`<sup>Required</sup> <a name="FlowId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.flowId"></a>

```csharp
public string FlowId { get; set; }
```

- *Type:* string

The flow ID of the flow in the Dialogflow agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#flow_id GoogleCesAgent#flow_id}

---

##### `EnvironmentId`<sup>Optional</sup> <a name="EnvironmentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.environmentId"></a>

```csharp
public string EnvironmentId { get; set; }
```

- *Type:* string

The environment ID of the Dialogflow agent be used for the agent execution.

If not specified, the draft environment will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#environment_id GoogleCesAgent#environment_id}

---

##### `InputVariableMapping`<sup>Optional</sup> <a name="InputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.inputVariableMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InputVariableMapping { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#input_variable_mapping GoogleCesAgent#input_variable_mapping}

---

##### `LanguageCodeVariable`<sup>Optional</sup> <a name="LanguageCodeVariable" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.languageCodeVariable"></a>

```csharp
public string LanguageCodeVariable { get; set; }
```

- *Type:* string

The name of the variable that contains the language code to be used for the Dialogflow session.

If unspecified, the default language code of the
Dialogflow agent will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#language_code_variable GoogleCesAgent#language_code_variable}

---

##### `OutputVariableMapping`<sup>Optional</sup> <a name="OutputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.outputVariableMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OutputVariableMapping { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#output_variable_mapping GoogleCesAgent#output_variable_mapping}

---

##### `RespectResponseInterruptionSettings`<sup>Optional</sup> <a name="RespectResponseInterruptionSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings"></a>

```csharp
public bool|IResolvable RespectResponseInterruptionSettings { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent.

* If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with ['allow_playback_interruption'](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#respect_response_interruption_settings GoogleCesAgent#respect_response_interruption_settings}

---

### GoogleCesAgentTimeouts <a name="GoogleCesAgentTimeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#create GoogleCesAgent#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#delete GoogleCesAgent#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#update GoogleCesAgent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#create GoogleCesAgent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#delete GoogleCesAgent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#update GoogleCesAgent#update}.

---

### GoogleCesAgentToolsets <a name="GoogleCesAgentToolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentToolsets {
    string Toolset,
    string[] ToolIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolset">Toolset</a></code> | <code>string</code> | The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolIds">ToolIds</a></code> | <code>string[]</code> | The tools IDs to filter the toolset. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolset"></a>

```csharp
public string Toolset { get; set; }
```

- *Type:* string

The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#toolset GoogleCesAgent#toolset}

---

##### `ToolIds`<sup>Optional</sup> <a name="ToolIds" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolIds"></a>

```csharp
public string[] ToolIds { get; set; }
```

- *Type:* string[]

The tools IDs to filter the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tool_ids GoogleCesAgent#tool_ids}

---

### GoogleCesAgentTransferRules <a name="GoogleCesAgentTransferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentTransferRules {
    string ChildAgent,
    string Direction,
    GoogleCesAgentTransferRulesDeterministicTransfer DeterministicTransfer = null,
    GoogleCesAgentTransferRulesDisablePlannerTransfer DisablePlannerTransfer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.childAgent">ChildAgent</a></code> | <code>string</code> | The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.direction">Direction</a></code> | <code>string</code> | The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.deterministicTransfer">DeterministicTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a></code> | deterministic_transfer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.disablePlannerTransfer">DisablePlannerTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a></code> | disable_planner_transfer block. |

---

##### `ChildAgent`<sup>Required</sup> <a name="ChildAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.childAgent"></a>

```csharp
public string ChildAgent { get; set; }
```

- *Type:* string

The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#child_agent GoogleCesAgent#child_agent}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#direction GoogleCesAgent#direction}

---

##### `DeterministicTransfer`<sup>Optional</sup> <a name="DeterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.deterministicTransfer"></a>

```csharp
public GoogleCesAgentTransferRulesDeterministicTransfer DeterministicTransfer { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a>

deterministic_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#deterministic_transfer GoogleCesAgent#deterministic_transfer}

---

##### `DisablePlannerTransfer`<sup>Optional</sup> <a name="DisablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.disablePlannerTransfer"></a>

```csharp
public GoogleCesAgentTransferRulesDisablePlannerTransfer DisablePlannerTransfer { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a>

disable_planner_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disable_planner_transfer GoogleCesAgent#disable_planner_transfer}

---

### GoogleCesAgentTransferRulesDeterministicTransfer <a name="GoogleCesAgentTransferRulesDeterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentTransferRulesDeterministicTransfer {
    GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition ExpressionCondition = null,
    GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition PythonCodeCondition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.expressionCondition">ExpressionCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | expression_condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition">PythonCodeCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | python_code_condition block. |

---

##### `ExpressionCondition`<sup>Optional</sup> <a name="ExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.expressionCondition"></a>

```csharp
public GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition ExpressionCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression_condition GoogleCesAgent#expression_condition}

---

##### `PythonCodeCondition`<sup>Optional</sup> <a name="PythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition"></a>

```csharp
public GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition PythonCodeCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

python_code_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code_condition GoogleCesAgent#python_code_condition}

---

### GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition <a name="GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition {
    string Expression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression">Expression</a></code> | <code>string</code> | The string representation of cloud.api.Expression condition. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression GoogleCesAgent#expression}

---

### GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition <a name="GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition {
    string PythonCode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode">PythonCode</a></code> | <code>string</code> | The python code to execute. The function must be named 'should_trigger_transfer_callback'. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The python code to execute. The function must be named 'should_trigger_transfer_callback'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

### GoogleCesAgentTransferRulesDisablePlannerTransfer <a name="GoogleCesAgentTransferRulesDisablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentTransferRulesDisablePlannerTransfer {
    GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition ExpressionCondition
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition">ExpressionCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | expression_condition block. |

---

##### `ExpressionCondition`<sup>Required</sup> <a name="ExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition"></a>

```csharp
public GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition ExpressionCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression_condition GoogleCesAgent#expression_condition}

---

### GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition <a name="GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition {
    string Expression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression">Expression</a></code> | <code>string</code> | The string representation of cloud.api.Expression condition. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression GoogleCesAgent#expression}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesAgentAfterAgentCallbacksList <a name="GoogleCesAgentAfterAgentCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentAfterAgentCallbacksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.get"></a>

```csharp
private GoogleCesAgentAfterAgentCallbacksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentAfterAgentCallbacks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>[]

---


### GoogleCesAgentAfterAgentCallbacksOutputReference <a name="GoogleCesAgentAfterAgentCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentAfterAgentCallbacksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled">ResetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetProactiveExecutionEnabled` <a name="ResetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```csharp
private void ResetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">ProactiveExecutionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProactiveExecutionEnabledInput`<sup>Optional</sup> <a name="ProactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProactiveExecutionEnabled`<sup>Required</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentAfterAgentCallbacks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>

---


### GoogleCesAgentAfterModelCallbacksList <a name="GoogleCesAgentAfterModelCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentAfterModelCallbacksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.get"></a>

```csharp
private GoogleCesAgentAfterModelCallbacksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentAfterModelCallbacks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>[]

---


### GoogleCesAgentAfterModelCallbacksOutputReference <a name="GoogleCesAgentAfterModelCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentAfterModelCallbacksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled">ResetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetProactiveExecutionEnabled` <a name="ResetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```csharp
private void ResetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">ProactiveExecutionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProactiveExecutionEnabledInput`<sup>Optional</sup> <a name="ProactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProactiveExecutionEnabled`<sup>Required</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentAfterModelCallbacks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>

---


### GoogleCesAgentAfterToolCallbacksList <a name="GoogleCesAgentAfterToolCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentAfterToolCallbacksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.get"></a>

```csharp
private GoogleCesAgentAfterToolCallbacksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentAfterToolCallbacks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>[]

---


### GoogleCesAgentAfterToolCallbacksOutputReference <a name="GoogleCesAgentAfterToolCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentAfterToolCallbacksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled">ResetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetProactiveExecutionEnabled` <a name="ResetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```csharp
private void ResetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">ProactiveExecutionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProactiveExecutionEnabledInput`<sup>Optional</sup> <a name="ProactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProactiveExecutionEnabled`<sup>Required</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentAfterToolCallbacks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>

---


### GoogleCesAgentBeforeAgentCallbacksList <a name="GoogleCesAgentBeforeAgentCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentBeforeAgentCallbacksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.get"></a>

```csharp
private GoogleCesAgentBeforeAgentCallbacksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentBeforeAgentCallbacks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>[]

---


### GoogleCesAgentBeforeAgentCallbacksOutputReference <a name="GoogleCesAgentBeforeAgentCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentBeforeAgentCallbacksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled">ResetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetProactiveExecutionEnabled` <a name="ResetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```csharp
private void ResetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">ProactiveExecutionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProactiveExecutionEnabledInput`<sup>Optional</sup> <a name="ProactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProactiveExecutionEnabled`<sup>Required</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentBeforeAgentCallbacks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>

---


### GoogleCesAgentBeforeModelCallbacksList <a name="GoogleCesAgentBeforeModelCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentBeforeModelCallbacksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.get"></a>

```csharp
private GoogleCesAgentBeforeModelCallbacksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentBeforeModelCallbacks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>[]

---


### GoogleCesAgentBeforeModelCallbacksOutputReference <a name="GoogleCesAgentBeforeModelCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentBeforeModelCallbacksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled">ResetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetProactiveExecutionEnabled` <a name="ResetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```csharp
private void ResetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">ProactiveExecutionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProactiveExecutionEnabledInput`<sup>Optional</sup> <a name="ProactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProactiveExecutionEnabled`<sup>Required</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentBeforeModelCallbacks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>

---


### GoogleCesAgentBeforeToolCallbacksList <a name="GoogleCesAgentBeforeToolCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentBeforeToolCallbacksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.get"></a>

```csharp
private GoogleCesAgentBeforeToolCallbacksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentBeforeToolCallbacks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>[]

---


### GoogleCesAgentBeforeToolCallbacksOutputReference <a name="GoogleCesAgentBeforeToolCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentBeforeToolCallbacksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled">ResetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetProactiveExecutionEnabled` <a name="ResetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```csharp
private void ResetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">ProactiveExecutionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProactiveExecutionEnabledInput`<sup>Optional</sup> <a name="ProactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProactiveExecutionEnabled`<sup>Required</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```csharp
public bool|IResolvable ProactiveExecutionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentBeforeToolCallbacks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>

---


### GoogleCesAgentLlmAgentOutputReference <a name="GoogleCesAgentLlmAgentOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentLlmAgentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentLlmAgent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

---


### GoogleCesAgentModelSettingsOutputReference <a name="GoogleCesAgentModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentModelSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetTemperature"></a>

```csharp
private void ResetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperatureInput"></a>

```csharp
public double TemperatureInput { get; }
```

- *Type:* double

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentModelSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills">PutSkills</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces">PutSupportedInterfaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSkills` <a name="PutSkills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills"></a>

```csharp
private void PutSkills(IResolvable|GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]

---

##### `PutSupportedInterfaces` <a name="PutSupportedInterfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces"></a>

```csharp
private void PutSupportedInterfaces(IResolvable|GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills">Skills</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces">SupportedInterfaces</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput">SkillsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput">SupportedInterfacesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Skills`<sup>Required</sup> <a name="Skills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList Skills { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a>

---

##### `SupportedInterfaces`<sup>Required</sup> <a name="SupportedInterfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList SupportedInterfaces { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SkillsInput`<sup>Optional</sup> <a name="SkillsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput"></a>

```csharp
public IResolvable|GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills[] SkillsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]

---

##### `SupportedInterfacesInput`<sup>Optional</sup> <a name="SupportedInterfacesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput"></a>

```csharp
public IResolvable|GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[] SupportedInterfacesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get"></a>

```csharp
private GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples">ResetExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes">ResetInputModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes">ResetOutputModes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExamples` <a name="ResetExamples" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples"></a>

```csharp
private void ResetExamples()
```

##### `ResetInputModes` <a name="ResetInputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes"></a>

```csharp
private void ResetInputModes()
```

##### `ResetOutputModes` <a name="ResetOutputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes"></a>

```csharp
private void ResetOutputModes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput">ExamplesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput">InputModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput">OutputModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples">Examples</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes">InputModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes">OutputModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExamplesInput`<sup>Optional</sup> <a name="ExamplesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput"></a>

```csharp
public string[] ExamplesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputModesInput`<sup>Optional</sup> <a name="InputModesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput"></a>

```csharp
public string[] InputModesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputModesInput`<sup>Optional</sup> <a name="OutputModesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput"></a>

```csharp
public string[] OutputModesInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Examples`<sup>Required</sup> <a name="Examples" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples"></a>

```csharp
public string[] Examples { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputModes`<sup>Required</sup> <a name="InputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes"></a>

```csharp
public string[] InputModes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputModes`<sup>Required</sup> <a name="OutputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes"></a>

```csharp
public string[] OutputModes { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get"></a>

```csharp
private GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant">ResetTenant</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTenant` <a name="ResetTenant" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant"></a>

```csharp
private void ResetTenant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput">ProtocolBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput">ProtocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput">TenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding">ProtocolBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion">ProtocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant">Tenant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProtocolBindingInput`<sup>Optional</sup> <a name="ProtocolBindingInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput"></a>

```csharp
public string ProtocolBindingInput { get; }
```

- *Type:* string

---

##### `ProtocolVersionInput`<sup>Optional</sup> <a name="ProtocolVersionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput"></a>

```csharp
public string ProtocolVersionInput { get; }
```

- *Type:* string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput"></a>

```csharp
public string TenantInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `ProtocolBinding`<sup>Required</sup> <a name="ProtocolBinding" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding"></a>

```csharp
public string ProtocolBinding { get; }
```

- *Type:* string

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion"></a>

```csharp
public string ProtocolVersion { get; }
```

- *Type:* string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant"></a>

```csharp
public string Tenant { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">ApiKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">RequestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">RequestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeySecretVersionInput`<sup>Optional</sup> <a name="ApiKeySecretVersionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```csharp
public string ApiKeySecretVersionInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `RequestLocationInput`<sup>Optional</sup> <a name="RequestLocationInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```csharp
public string RequestLocationInput { get; }
```

- *Type:* string

---

##### `ApiKeySecretVersion`<sup>Required</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```csharp
public string ApiKeySecretVersion { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```csharp
public string RequestLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">ClientSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">OauthGrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">ClientSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">OauthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretVersionInput`<sup>Optional</sup> <a name="ClientSecretVersionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```csharp
public string ClientSecretVersionInput { get; }
```

- *Type:* string

---

##### `OauthGrantTypeInput`<sup>Optional</sup> <a name="OauthGrantTypeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```csharp
public string OauthGrantTypeInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```csharp
public string TokenEndpointInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretVersion`<sup>Required</sup> <a name="ClientSecretVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```csharp
public string ClientSecretVersion { get; }
```

- *Type:* string

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```csharp
public string OauthGrantType { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig">PutApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig">PutBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig">PutServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig">ResetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig">ResetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig">ResetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig">ResetServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConfig` <a name="PutApiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig"></a>

```csharp
private void PutApiKeyConfig(GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---

##### `PutBearerTokenConfig` <a name="PutBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```csharp
private void PutBearerTokenConfig(GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig"></a>

```csharp
private void PutOauthConfig(GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---

##### `PutServiceAccountAuthConfig` <a name="PutServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```csharp
private void PutServiceAccountAuthConfig(GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---

##### `ResetApiKeyConfig` <a name="ResetApiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```csharp
private void ResetApiKeyConfig()
```

##### `ResetBearerTokenConfig` <a name="ResetBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```csharp
private void ResetBearerTokenConfig()
```

##### `ResetOauthConfig` <a name="ResetOauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig"></a>

```csharp
private void ResetOauthConfig()
```

##### `ResetServiceAccountAuthConfig` <a name="ResetServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```csharp
private void ResetServiceAccountAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig">ServiceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput">ApiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput">BearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">ServiceAccountAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference ApiKeyConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `BearerTokenConfig`<sup>Required</sup> <a name="BearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference BearerTokenConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference OauthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a>

---

##### `ServiceAccountAuthConfig`<sup>Required</sup> <a name="ServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference ServiceAccountAuthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `ApiKeyConfigInput`<sup>Optional</sup> <a name="ApiKeyConfigInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig ApiKeyConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---

##### `BearerTokenConfigInput`<sup>Optional</sup> <a name="BearerTokenConfigInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig BearerTokenConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig OauthConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---

##### `ServiceAccountAuthConfigInput`<sup>Optional</sup> <a name="ServiceAccountAuthConfigInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig ServiceAccountAuthConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard">PutAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication">PutApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard">ResetAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry">ResetAgentRegistry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication">ResetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId">ResetContextId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping">ResetInputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping">ResetOutputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled">ResetStreamingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentCard` <a name="PutAgentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard"></a>

```csharp
private void PutAgentCard(GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---

##### `PutApiAuthentication` <a name="PutApiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication"></a>

```csharp
private void PutApiAuthentication(GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---

##### `ResetAgentCard` <a name="ResetAgentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard"></a>

```csharp
private void ResetAgentCard()
```

##### `ResetAgentRegistry` <a name="ResetAgentRegistry" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry"></a>

```csharp
private void ResetAgentRegistry()
```

##### `ResetApiAuthentication` <a name="ResetApiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication"></a>

```csharp
private void ResetApiAuthentication()
```

##### `ResetContextId` <a name="ResetContextId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId"></a>

```csharp
private void ResetContextId()
```

##### `ResetInputVariableMapping` <a name="ResetInputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping"></a>

```csharp
private void ResetInputVariableMapping()
```

##### `ResetOutputVariableMapping` <a name="ResetOutputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping"></a>

```csharp
private void ResetOutputVariableMapping()
```

##### `ResetStreamingEnabled` <a name="ResetStreamingEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled"></a>

```csharp
private void ResetStreamingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard">AgentCard</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication">ApiAuthentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput">AgentCardInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput">AgentRegistryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput">ApiAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput">ContextIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput">InputVariableMappingInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput">OutputVariableMappingInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput">StreamingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry">AgentRegistry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId">ContextId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping">InputVariableMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping">OutputVariableMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled">StreamingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentCard`<sup>Required</sup> <a name="AgentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference AgentCard { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a>

---

##### `ApiAuthentication`<sup>Required</sup> <a name="ApiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference ApiAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a>

---

##### `AgentCardInput`<sup>Optional</sup> <a name="AgentCardInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard AgentCardInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---

##### `AgentRegistryInput`<sup>Optional</sup> <a name="AgentRegistryInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput"></a>

```csharp
public string AgentRegistryInput { get; }
```

- *Type:* string

---

##### `ApiAuthenticationInput`<sup>Optional</sup> <a name="ApiAuthenticationInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication ApiAuthenticationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---

##### `ContextIdInput`<sup>Optional</sup> <a name="ContextIdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput"></a>

```csharp
public string ContextIdInput { get; }
```

- *Type:* string

---

##### `InputVariableMappingInput`<sup>Optional</sup> <a name="InputVariableMappingInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InputVariableMappingInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OutputVariableMappingInput`<sup>Optional</sup> <a name="OutputVariableMappingInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OutputVariableMappingInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StreamingEnabledInput`<sup>Optional</sup> <a name="StreamingEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput"></a>

```csharp
public bool|IResolvable StreamingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AgentRegistry`<sup>Required</sup> <a name="AgentRegistry" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry"></a>

```csharp
public string AgentRegistry { get; }
```

- *Type:* string

---

##### `ContextId`<sup>Required</sup> <a name="ContextId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId"></a>

```csharp
public string ContextId { get; }
```

- *Type:* string

---

##### `InputVariableMapping`<sup>Required</sup> <a name="InputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InputVariableMapping { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OutputVariableMapping`<sup>Required</sup> <a name="OutputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OutputVariableMapping { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StreamingEnabled`<sup>Required</sup> <a name="StreamingEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled"></a>

```csharp
public bool|IResolvable StreamingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

---


### GoogleCesAgentRemoteA2AAgentOutputReference <a name="GoogleCesAgentRemoteA2AAgentOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteA2AAgentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig">PutA2AConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutA2AConfig` <a name="PutA2AConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig"></a>

```csharp
private void PutA2AConfig(GoogleCesAgentRemoteA2AAgentA2AConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfig">A2AConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput">A2AConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `A2AConfig`<sup>Required</sup> <a name="A2AConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfig"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference A2AConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference</a>

---

##### `A2AConfigInput`<sup>Optional</sup> <a name="A2AConfigInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput"></a>

```csharp
public GoogleCesAgentRemoteA2AAgentA2AConfig A2AConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentRemoteA2AAgent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

---


### GoogleCesAgentRemoteDialogflowAgentOutputReference <a name="GoogleCesAgentRemoteDialogflowAgentOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentRemoteDialogflowAgentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId">ResetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping">ResetInputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable">ResetLanguageCodeVariable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping">ResetOutputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings">ResetRespectResponseInterruptionSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironmentId` <a name="ResetEnvironmentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId"></a>

```csharp
private void ResetEnvironmentId()
```

##### `ResetInputVariableMapping` <a name="ResetInputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping"></a>

```csharp
private void ResetInputVariableMapping()
```

##### `ResetLanguageCodeVariable` <a name="ResetLanguageCodeVariable" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable"></a>

```csharp
private void ResetLanguageCodeVariable()
```

##### `ResetOutputVariableMapping` <a name="ResetOutputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping"></a>

```csharp
private void ResetOutputVariableMapping()
```

##### `ResetRespectResponseInterruptionSettings` <a name="ResetRespectResponseInterruptionSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings"></a>

```csharp
private void ResetRespectResponseInterruptionSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agentInput">AgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput">FlowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput">InputVariableMappingInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput">LanguageCodeVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput">OutputVariableMappingInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput">RespectResponseInterruptionSettingsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agent">Agent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowId">FlowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping">InputVariableMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable">LanguageCodeVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping">OutputVariableMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings">RespectResponseInterruptionSettings</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentInput`<sup>Optional</sup> <a name="AgentInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agentInput"></a>

```csharp
public string AgentInput { get; }
```

- *Type:* string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput"></a>

```csharp
public string EnvironmentIdInput { get; }
```

- *Type:* string

---

##### `FlowIdInput`<sup>Optional</sup> <a name="FlowIdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput"></a>

```csharp
public string FlowIdInput { get; }
```

- *Type:* string

---

##### `InputVariableMappingInput`<sup>Optional</sup> <a name="InputVariableMappingInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InputVariableMappingInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LanguageCodeVariableInput`<sup>Optional</sup> <a name="LanguageCodeVariableInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput"></a>

```csharp
public string LanguageCodeVariableInput { get; }
```

- *Type:* string

---

##### `OutputVariableMappingInput`<sup>Optional</sup> <a name="OutputVariableMappingInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OutputVariableMappingInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RespectResponseInterruptionSettingsInput`<sup>Optional</sup> <a name="RespectResponseInterruptionSettingsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput"></a>

```csharp
public bool|IResolvable RespectResponseInterruptionSettingsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agent"></a>

```csharp
public string Agent { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `FlowId`<sup>Required</sup> <a name="FlowId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowId"></a>

```csharp
public string FlowId { get; }
```

- *Type:* string

---

##### `InputVariableMapping`<sup>Required</sup> <a name="InputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InputVariableMapping { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LanguageCodeVariable`<sup>Required</sup> <a name="LanguageCodeVariable" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable"></a>

```csharp
public string LanguageCodeVariable { get; }
```

- *Type:* string

---

##### `OutputVariableMapping`<sup>Required</sup> <a name="OutputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OutputVariableMapping { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RespectResponseInterruptionSettings`<sup>Required</sup> <a name="RespectResponseInterruptionSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings"></a>

```csharp
public bool|IResolvable RespectResponseInterruptionSettings { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentRemoteDialogflowAgent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

---


### GoogleCesAgentTimeoutsOutputReference <a name="GoogleCesAgentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

---


### GoogleCesAgentToolsetsList <a name="GoogleCesAgentToolsetsList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentToolsetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.get"></a>

```csharp
private GoogleCesAgentToolsetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentToolsets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>[]

---


### GoogleCesAgentToolsetsOutputReference <a name="GoogleCesAgentToolsetsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentToolsetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resetToolIds">ResetToolIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolIds` <a name="ResetToolIds" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resetToolIds"></a>

```csharp
private void ResetToolIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIdsInput">ToolIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIds">ToolIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolset">Toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ToolIdsInput`<sup>Optional</sup> <a name="ToolIdsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIdsInput"></a>

```csharp
public string[] ToolIdsInput { get; }
```

- *Type:* string[]

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolsetInput"></a>

```csharp
public string ToolsetInput { get; }
```

- *Type:* string

---

##### `ToolIds`<sup>Required</sup> <a name="ToolIds" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIds"></a>

```csharp
public string[] ToolIds { get; }
```

- *Type:* string[]

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolset"></a>

```csharp
public string Toolset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentToolsets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>

---


### GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference <a name="GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---


### GoogleCesAgentTransferRulesDeterministicTransferOutputReference <a name="GoogleCesAgentTransferRulesDeterministicTransferOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentTransferRulesDeterministicTransferOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition">PutExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition">PutPythonCodeCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition">ResetExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition">ResetPythonCodeCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpressionCondition` <a name="PutExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition"></a>

```csharp
private void PutExpressionCondition(GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---

##### `PutPythonCodeCondition` <a name="PutPythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition"></a>

```csharp
private void PutPythonCodeCondition(GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---

##### `ResetExpressionCondition` <a name="ResetExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition"></a>

```csharp
private void ResetExpressionCondition()
```

##### `ResetPythonCodeCondition` <a name="ResetPythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition"></a>

```csharp
private void ResetPythonCodeCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition">ExpressionCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition">PythonCodeCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput">ExpressionConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput">PythonCodeConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionCondition`<sup>Required</sup> <a name="ExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition"></a>

```csharp
public GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference ExpressionCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a>

---

##### `PythonCodeCondition`<sup>Required</sup> <a name="PythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition"></a>

```csharp
public GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference PythonCodeCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a>

---

##### `ExpressionConditionInput`<sup>Optional</sup> <a name="ExpressionConditionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput"></a>

```csharp
public GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition ExpressionConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---

##### `PythonCodeConditionInput`<sup>Optional</sup> <a name="PythonCodeConditionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput"></a>

```csharp
public GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition PythonCodeConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentTransferRulesDeterministicTransfer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a>

---


### GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference <a name="GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---


### GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference <a name="GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---


### GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference <a name="GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition">PutExpressionCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpressionCondition` <a name="PutExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition"></a>

```csharp
private void PutExpressionCondition(GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition">ExpressionCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput">ExpressionConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionCondition`<sup>Required</sup> <a name="ExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition"></a>

```csharp
public GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference ExpressionCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a>

---

##### `ExpressionConditionInput`<sup>Optional</sup> <a name="ExpressionConditionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput"></a>

```csharp
public GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition ExpressionConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAgentTransferRulesDisablePlannerTransfer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a>

---


### GoogleCesAgentTransferRulesList <a name="GoogleCesAgentTransferRulesList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentTransferRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.get"></a>

```csharp
private GoogleCesAgentTransferRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentTransferRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>[]

---


### GoogleCesAgentTransferRulesOutputReference <a name="GoogleCesAgentTransferRulesOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAgentTransferRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDeterministicTransfer">PutDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDisablePlannerTransfer">PutDisablePlannerTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDeterministicTransfer">ResetDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDisablePlannerTransfer">ResetDisablePlannerTransfer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeterministicTransfer` <a name="PutDeterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDeterministicTransfer"></a>

```csharp
private void PutDeterministicTransfer(GoogleCesAgentTransferRulesDeterministicTransfer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDeterministicTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a>

---

##### `PutDisablePlannerTransfer` <a name="PutDisablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDisablePlannerTransfer"></a>

```csharp
private void PutDisablePlannerTransfer(GoogleCesAgentTransferRulesDisablePlannerTransfer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDisablePlannerTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a>

---

##### `ResetDeterministicTransfer` <a name="ResetDeterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDeterministicTransfer"></a>

```csharp
private void ResetDeterministicTransfer()
```

##### `ResetDisablePlannerTransfer` <a name="ResetDisablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDisablePlannerTransfer"></a>

```csharp
private void ResetDisablePlannerTransfer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransfer">DeterministicTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference">GoogleCesAgentTransferRulesDeterministicTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransfer">DisablePlannerTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgentInput">ChildAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransferInput">DeterministicTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransferInput">DisablePlannerTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgent">ChildAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeterministicTransfer`<sup>Required</sup> <a name="DeterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransfer"></a>

```csharp
public GoogleCesAgentTransferRulesDeterministicTransferOutputReference DeterministicTransfer { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference">GoogleCesAgentTransferRulesDeterministicTransferOutputReference</a>

---

##### `DisablePlannerTransfer`<sup>Required</sup> <a name="DisablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransfer"></a>

```csharp
public GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference DisablePlannerTransfer { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference</a>

---

##### `ChildAgentInput`<sup>Optional</sup> <a name="ChildAgentInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgentInput"></a>

```csharp
public string ChildAgentInput { get; }
```

- *Type:* string

---

##### `DeterministicTransferInput`<sup>Optional</sup> <a name="DeterministicTransferInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransferInput"></a>

```csharp
public GoogleCesAgentTransferRulesDeterministicTransfer DeterministicTransferInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `DisablePlannerTransferInput`<sup>Optional</sup> <a name="DisablePlannerTransferInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransferInput"></a>

```csharp
public GoogleCesAgentTransferRulesDisablePlannerTransfer DisablePlannerTransferInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a>

---

##### `ChildAgent`<sup>Required</sup> <a name="ChildAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgent"></a>

```csharp
public string ChildAgent { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAgentTransferRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>

---



