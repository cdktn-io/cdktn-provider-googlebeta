# `googleCesGuardrail` Submodule <a name="`googleCesGuardrail` Submodule" id="@cdktn/provider-google-beta.googleCesGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesGuardrail <a name="GoogleCesGuardrail" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail google_ces_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrail(Construct Scope, string Id, GoogleCesGuardrailConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig">GoogleCesGuardrailConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig">GoogleCesGuardrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback">PutCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter">PutContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy">PutLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity">PutLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putModelSafety">PutModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetCodeCallback">ResetCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetContentFilter">ResetContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPolicy">ResetLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPromptSecurity">ResetLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetModelSafety">ResetModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction"></a>

```csharp
private void PutAction(GoogleCesGuardrailAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

---

##### `PutCodeCallback` <a name="PutCodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback"></a>

```csharp
private void PutCodeCallback(GoogleCesGuardrailCodeCallback Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

---

##### `PutContentFilter` <a name="PutContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter"></a>

```csharp
private void PutContentFilter(GoogleCesGuardrailContentFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

---

##### `PutLlmPolicy` <a name="PutLlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy"></a>

```csharp
private void PutLlmPolicy(GoogleCesGuardrailLlmPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

---

##### `PutLlmPromptSecurity` <a name="PutLlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity"></a>

```csharp
private void PutLlmPromptSecurity(GoogleCesGuardrailLlmPromptSecurity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

---

##### `PutModelSafety` <a name="PutModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putModelSafety"></a>

```csharp
private void PutModelSafety(GoogleCesGuardrailModelSafety Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putModelSafety.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCesGuardrailTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetCodeCallback` <a name="ResetCodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetCodeCallback"></a>

```csharp
private void ResetCodeCallback()
```

##### `ResetContentFilter` <a name="ResetContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetContentFilter"></a>

```csharp
private void ResetContentFilter()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLlmPolicy` <a name="ResetLlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPolicy"></a>

```csharp
private void ResetLlmPolicy()
```

##### `ResetLlmPromptSecurity` <a name="ResetLlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPromptSecurity"></a>

```csharp
private void ResetLlmPromptSecurity()
```

##### `ResetModelSafety` <a name="ResetModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetModelSafety"></a>

```csharp
private void ResetModelSafety()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesGuardrail.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesGuardrail.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesGuardrail.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesGuardrail.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleCesGuardrail resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCesGuardrail to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCesGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.action">Action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference">GoogleCesGuardrailActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallback">CodeCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference">GoogleCesGuardrailCodeCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilter">ContentFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference">GoogleCesGuardrailContentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicy">LlmPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference">GoogleCesGuardrailLlmPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurity">LlmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference">GoogleCesGuardrailLlmPromptSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafety">ModelSafety</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference">GoogleCesGuardrailModelSafetyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference">GoogleCesGuardrailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.appInput">AppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallbackInput">CodeCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilterInput">ContentFilterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailIdInput">GuardrailIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicyInput">LlmPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurityInput">LlmPromptSecurityInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafetyInput">ModelSafetyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.app">App</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailId">GuardrailId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.action"></a>

```csharp
public GoogleCesGuardrailActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference">GoogleCesGuardrailActionOutputReference</a>

---

##### `CodeCallback`<sup>Required</sup> <a name="CodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallback"></a>

```csharp
public GoogleCesGuardrailCodeCallbackOutputReference CodeCallback { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference">GoogleCesGuardrailCodeCallbackOutputReference</a>

---

##### `ContentFilter`<sup>Required</sup> <a name="ContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilter"></a>

```csharp
public GoogleCesGuardrailContentFilterOutputReference ContentFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference">GoogleCesGuardrailContentFilterOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `LlmPolicy`<sup>Required</sup> <a name="LlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicy"></a>

```csharp
public GoogleCesGuardrailLlmPolicyOutputReference LlmPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference">GoogleCesGuardrailLlmPolicyOutputReference</a>

---

##### `LlmPromptSecurity`<sup>Required</sup> <a name="LlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurity"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurityOutputReference LlmPromptSecurity { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference">GoogleCesGuardrailLlmPromptSecurityOutputReference</a>

---

##### `ModelSafety`<sup>Required</sup> <a name="ModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafety"></a>

```csharp
public GoogleCesGuardrailModelSafetyOutputReference ModelSafety { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference">GoogleCesGuardrailModelSafetyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeouts"></a>

```csharp
public GoogleCesGuardrailTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference">GoogleCesGuardrailTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.actionInput"></a>

```csharp
public GoogleCesGuardrailAction ActionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.appInput"></a>

```csharp
public string AppInput { get; }
```

- *Type:* string

---

##### `CodeCallbackInput`<sup>Optional</sup> <a name="CodeCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallbackInput"></a>

```csharp
public GoogleCesGuardrailCodeCallback CodeCallbackInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

---

##### `ContentFilterInput`<sup>Optional</sup> <a name="ContentFilterInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilterInput"></a>

```csharp
public GoogleCesGuardrailContentFilter ContentFilterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GuardrailIdInput`<sup>Optional</sup> <a name="GuardrailIdInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailIdInput"></a>

```csharp
public string GuardrailIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LlmPolicyInput`<sup>Optional</sup> <a name="LlmPolicyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicyInput"></a>

```csharp
public GoogleCesGuardrailLlmPolicy LlmPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

---

##### `LlmPromptSecurityInput`<sup>Optional</sup> <a name="LlmPromptSecurityInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurityInput"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurity LlmPromptSecurityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ModelSafetyInput`<sup>Optional</sup> <a name="ModelSafetyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafetyInput"></a>

```csharp
public GoogleCesGuardrailModelSafety ModelSafetyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleCesGuardrailTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.app"></a>

```csharp
public string App { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GuardrailId`<sup>Required</sup> <a name="GuardrailId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailId"></a>

```csharp
public string GuardrailId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesGuardrailAction <a name="GoogleCesGuardrailAction" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailAction {
    GoogleCesGuardrailActionGenerativeAnswer GenerativeAnswer = null,
    GoogleCesGuardrailActionRespondImmediately RespondImmediately = null,
    GoogleCesGuardrailActionTransferAgent TransferAgent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.generativeAnswer">GenerativeAnswer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a></code> | generative_answer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.respondImmediately">RespondImmediately</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a></code> | respond_immediately block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.transferAgent">TransferAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a></code> | transfer_agent block. |

---

##### `GenerativeAnswer`<sup>Optional</sup> <a name="GenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.generativeAnswer"></a>

```csharp
public GoogleCesGuardrailActionGenerativeAnswer GenerativeAnswer { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

generative_answer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#generative_answer GoogleCesGuardrail#generative_answer}

---

##### `RespondImmediately`<sup>Optional</sup> <a name="RespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.respondImmediately"></a>

```csharp
public GoogleCesGuardrailActionRespondImmediately RespondImmediately { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

respond_immediately block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#respond_immediately GoogleCesGuardrail#respond_immediately}

---

##### `TransferAgent`<sup>Optional</sup> <a name="TransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.transferAgent"></a>

```csharp
public GoogleCesGuardrailActionTransferAgent TransferAgent { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

transfer_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#transfer_agent GoogleCesGuardrail#transfer_agent}

---

### GoogleCesGuardrailActionGenerativeAnswer <a name="GoogleCesGuardrailActionGenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailActionGenerativeAnswer {
    string Prompt
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer.property.prompt">Prompt</a></code> | <code>string</code> | The prompt to use for the generative answer. |

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer.property.prompt"></a>

```csharp
public string Prompt { get; set; }
```

- *Type:* string

The prompt to use for the generative answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

### GoogleCesGuardrailActionRespondImmediately <a name="GoogleCesGuardrailActionRespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailActionRespondImmediately {
    IResolvable|GoogleCesGuardrailActionRespondImmediatelyResponses[] Responses
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately.property.responses">Responses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>[]</code> | responses block. |

---

##### `Responses`<sup>Required</sup> <a name="Responses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately.property.responses"></a>

```csharp
public IResolvable|GoogleCesGuardrailActionRespondImmediatelyResponses[] Responses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>[]

responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#responses GoogleCesGuardrail#responses}

---

### GoogleCesGuardrailActionRespondImmediatelyResponses <a name="GoogleCesGuardrailActionRespondImmediatelyResponses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailActionRespondImmediatelyResponses {
    string Text,
    bool|IResolvable Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.text">Text</a></code> | <code>string</code> | Text for the agent to respond with. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the response is disabled. Disabled responses are not used by the agent. |

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Text for the agent to respond with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#text GoogleCesGuardrail#text}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the response is disabled. Disabled responses are not used by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailActionTransferAgent <a name="GoogleCesGuardrailActionTransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailActionTransferAgent {
    string Agent
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent.property.agent">Agent</a></code> | <code>string</code> | The name of the agent to transfer the conversation to. |

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent.property.agent"></a>

```csharp
public string Agent { get; set; }
```

- *Type:* string

The name of the agent to transfer the conversation to.

The agent must be
in the same app as the current agent.
Format:
'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#agent GoogleCesGuardrail#agent}

---

### GoogleCesGuardrailCodeCallback <a name="GoogleCesGuardrailCodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailCodeCallback {
    GoogleCesGuardrailCodeCallbackAfterAgentCallback AfterAgentCallback = null,
    GoogleCesGuardrailCodeCallbackAfterModelCallback AfterModelCallback = null,
    GoogleCesGuardrailCodeCallbackBeforeAgentCallback BeforeAgentCallback = null,
    GoogleCesGuardrailCodeCallbackBeforeModelCallback BeforeModelCallback = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterAgentCallback">AfterAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a></code> | after_agent_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterModelCallback">AfterModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a></code> | after_model_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeAgentCallback">BeforeAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a></code> | before_agent_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeModelCallback">BeforeModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a></code> | before_model_callback block. |

---

##### `AfterAgentCallback`<sup>Optional</sup> <a name="AfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterAgentCallback"></a>

```csharp
public GoogleCesGuardrailCodeCallbackAfterAgentCallback AfterAgentCallback { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

after_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#after_agent_callback GoogleCesGuardrail#after_agent_callback}

---

##### `AfterModelCallback`<sup>Optional</sup> <a name="AfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterModelCallback"></a>

```csharp
public GoogleCesGuardrailCodeCallbackAfterModelCallback AfterModelCallback { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

after_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#after_model_callback GoogleCesGuardrail#after_model_callback}

---

##### `BeforeAgentCallback`<sup>Optional</sup> <a name="BeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeAgentCallback"></a>

```csharp
public GoogleCesGuardrailCodeCallbackBeforeAgentCallback BeforeAgentCallback { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

before_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#before_agent_callback GoogleCesGuardrail#before_agent_callback}

---

##### `BeforeModelCallback`<sup>Optional</sup> <a name="BeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeModelCallback"></a>

```csharp
public GoogleCesGuardrailCodeCallbackBeforeModelCallback BeforeModelCallback { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

before_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#before_model_callback GoogleCesGuardrail#before_model_callback}

---

### GoogleCesGuardrailCodeCallbackAfterAgentCallback <a name="GoogleCesGuardrailCodeCallbackAfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailCodeCallbackAfterAgentCallback {
    string PythonCode,
    string Description = null,
    bool|IResolvable Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode">PythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.description">Description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailCodeCallbackAfterModelCallback <a name="GoogleCesGuardrailCodeCallbackAfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailCodeCallbackAfterModelCallback {
    string PythonCode,
    string Description = null,
    bool|IResolvable Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.pythonCode">PythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.description">Description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailCodeCallbackBeforeAgentCallback <a name="GoogleCesGuardrailCodeCallbackBeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailCodeCallbackBeforeAgentCallback {
    string PythonCode,
    string Description = null,
    bool|IResolvable Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode">PythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.description">Description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailCodeCallbackBeforeModelCallback <a name="GoogleCesGuardrailCodeCallbackBeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailCodeCallbackBeforeModelCallback {
    string PythonCode,
    string Description = null,
    bool|IResolvable Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode">PythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.description">Description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailConfig <a name="GoogleCesGuardrailConfig" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string App,
    string DisplayName,
    string GuardrailId,
    string Location,
    GoogleCesGuardrailAction Action = null,
    GoogleCesGuardrailCodeCallback CodeCallback = null,
    GoogleCesGuardrailContentFilter ContentFilter = null,
    string DeletionPolicy = null,
    string Description = null,
    bool|IResolvable Enabled = null,
    string Id = null,
    GoogleCesGuardrailLlmPolicy LlmPolicy = null,
    GoogleCesGuardrailLlmPromptSecurity LlmPromptSecurity = null,
    GoogleCesGuardrailModelSafety ModelSafety = null,
    string Project = null,
    GoogleCesGuardrailTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.app">App</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name of the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.guardrailId">GuardrailId</a></code> | <code>string</code> | The ID to use for the guardrail, which will become the final component of the guardrail's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.action">Action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.codeCallback">CodeCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | code_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.contentFilter">ContentFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | content_filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.description">Description</a></code> | <code>string</code> | Description of the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the guardrail is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#id GoogleCesGuardrail#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPolicy">LlmPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | llm_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPromptSecurity">LlmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | llm_prompt_security block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.modelSafety">ModelSafety</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | model_safety block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#project GoogleCesGuardrail#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.app"></a>

```csharp
public string App { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#app GoogleCesGuardrail#app}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#display_name GoogleCesGuardrail#display_name}

---

##### `GuardrailId`<sup>Required</sup> <a name="GuardrailId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.guardrailId"></a>

```csharp
public string GuardrailId { get; set; }
```

- *Type:* string

The ID to use for the guardrail, which will become the final component of the guardrail's resource name.

If not provided, a unique ID will be
automatically assigned for the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#guardrail_id GoogleCesGuardrail#guardrail_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#location GoogleCesGuardrail#location}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.action"></a>

```csharp
public GoogleCesGuardrailAction Action { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#action GoogleCesGuardrail#action}

---

##### `CodeCallback`<sup>Optional</sup> <a name="CodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.codeCallback"></a>

```csharp
public GoogleCesGuardrailCodeCallback CodeCallback { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

code_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#code_callback GoogleCesGuardrail#code_callback}

---

##### `ContentFilter`<sup>Optional</sup> <a name="ContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.contentFilter"></a>

```csharp
public GoogleCesGuardrailContentFilter ContentFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

content_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#content_filter GoogleCesGuardrail#content_filter}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#deletion_policy GoogleCesGuardrail#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the guardrail is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#enabled GoogleCesGuardrail#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#id GoogleCesGuardrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LlmPolicy`<sup>Optional</sup> <a name="LlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPolicy"></a>

```csharp
public GoogleCesGuardrailLlmPolicy LlmPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

llm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#llm_policy GoogleCesGuardrail#llm_policy}

---

##### `LlmPromptSecurity`<sup>Optional</sup> <a name="LlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPromptSecurity"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurity LlmPromptSecurity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

llm_prompt_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#llm_prompt_security GoogleCesGuardrail#llm_prompt_security}

---

##### `ModelSafety`<sup>Optional</sup> <a name="ModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.modelSafety"></a>

```csharp
public GoogleCesGuardrailModelSafety ModelSafety { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

model_safety block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#model_safety GoogleCesGuardrail#model_safety}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#project GoogleCesGuardrail#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.timeouts"></a>

```csharp
public GoogleCesGuardrailTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#timeouts GoogleCesGuardrail#timeouts}

---

### GoogleCesGuardrailContentFilter <a name="GoogleCesGuardrailContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailContentFilter {
    string MatchType,
    string[] BannedContents = null,
    string[] BannedContentsInAgentResponse = null,
    string[] BannedContentsInUserInput = null,
    bool|IResolvable DisregardDiacritics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.matchType">MatchType</a></code> | <code>string</code> | Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContents">BannedContents</a></code> | <code>string[]</code> | List of banned phrases. Applies to both user inputs and agent responses. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInAgentResponse">BannedContentsInAgentResponse</a></code> | <code>string[]</code> | List of banned phrases. Applies only to agent responses. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInUserInput">BannedContentsInUserInput</a></code> | <code>string[]</code> | List of banned phrases. Applies only to user inputs. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.disregardDiacritics">DisregardDiacritics</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, diacritics are ignored during matching. |

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.matchType"></a>

```csharp
public string MatchType { get; set; }
```

- *Type:* string

Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#match_type GoogleCesGuardrail#match_type}

---

##### `BannedContents`<sup>Optional</sup> <a name="BannedContents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContents"></a>

```csharp
public string[] BannedContents { get; set; }
```

- *Type:* string[]

List of banned phrases. Applies to both user inputs and agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#banned_contents GoogleCesGuardrail#banned_contents}

---

##### `BannedContentsInAgentResponse`<sup>Optional</sup> <a name="BannedContentsInAgentResponse" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInAgentResponse"></a>

```csharp
public string[] BannedContentsInAgentResponse { get; set; }
```

- *Type:* string[]

List of banned phrases. Applies only to agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#banned_contents_in_agent_response GoogleCesGuardrail#banned_contents_in_agent_response}

---

##### `BannedContentsInUserInput`<sup>Optional</sup> <a name="BannedContentsInUserInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInUserInput"></a>

```csharp
public string[] BannedContentsInUserInput { get; set; }
```

- *Type:* string[]

List of banned phrases. Applies only to user inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#banned_contents_in_user_input GoogleCesGuardrail#banned_contents_in_user_input}

---

##### `DisregardDiacritics`<sup>Optional</sup> <a name="DisregardDiacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.disregardDiacritics"></a>

```csharp
public bool|IResolvable DisregardDiacritics { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, diacritics are ignored during matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#disregard_diacritics GoogleCesGuardrail#disregard_diacritics}

---

### GoogleCesGuardrailLlmPolicy <a name="GoogleCesGuardrailLlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailLlmPolicy {
    string PolicyScope,
    string Prompt,
    bool|IResolvable AllowShortUtterance = null,
    bool|IResolvable FailOpen = null,
    double MaxConversationMessages = null,
    GoogleCesGuardrailLlmPolicyModelSettings ModelSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.policyScope">PolicyScope</a></code> | <code>string</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.prompt">Prompt</a></code> | <code>string</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>double</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a></code> | model_settings block. |

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.policyScope"></a>

```csharp
public string PolicyScope { get; set; }
```

- *Type:* string

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE Possible values: ["USER_QUERY", "AGENT_RESPONSE", "USER_QUERY_AND_AGENT_RESPONSE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#policy_scope GoogleCesGuardrail#policy_scope}

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.prompt"></a>

```csharp
public string Prompt { get; set; }
```

- *Type:* string

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

##### `AllowShortUtterance`<sup>Optional</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.allowShortUtterance"></a>

```csharp
public bool|IResolvable AllowShortUtterance { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#allow_short_utterance GoogleCesGuardrail#allow_short_utterance}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

##### `MaxConversationMessages`<sup>Optional</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.maxConversationMessages"></a>

```csharp
public double MaxConversationMessages { get; set; }
```

- *Type:* double

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#max_conversation_messages GoogleCesGuardrail#max_conversation_messages}

---

##### `ModelSettings`<sup>Optional</sup> <a name="ModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.modelSettings"></a>

```csharp
public GoogleCesGuardrailLlmPolicyModelSettings ModelSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#model_settings GoogleCesGuardrail#model_settings}

---

### GoogleCesGuardrailLlmPolicyModelSettings <a name="GoogleCesGuardrailLlmPolicyModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailLlmPolicyModelSettings {
    string Model = null,
    double Temperature = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.model">Model</a></code> | <code>string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.temperature">Temperature</a></code> | <code>double</code> | If set, this temperature will be used for the LLM model. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#model GoogleCesGuardrail#model}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.temperature"></a>

```csharp
public double Temperature { get; set; }
```

- *Type:* double

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#temperature GoogleCesGuardrail#temperature}

---

### GoogleCesGuardrailLlmPromptSecurity <a name="GoogleCesGuardrailLlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailLlmPromptSecurity {
    GoogleCesGuardrailLlmPromptSecurityCustomPolicy CustomPolicy = null,
    GoogleCesGuardrailLlmPromptSecurityDefaultSettings DefaultSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.customPolicy">CustomPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.defaultSettings">DefaultSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a></code> | default_settings block. |

---

##### `CustomPolicy`<sup>Optional</sup> <a name="CustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.customPolicy"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurityCustomPolicy CustomPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#custom_policy GoogleCesGuardrail#custom_policy}

---

##### `DefaultSettings`<sup>Optional</sup> <a name="DefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.defaultSettings"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurityDefaultSettings DefaultSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

default_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#default_settings GoogleCesGuardrail#default_settings}

---

### GoogleCesGuardrailLlmPromptSecurityCustomPolicy <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailLlmPromptSecurityCustomPolicy {
    string PolicyScope,
    string Prompt,
    bool|IResolvable AllowShortUtterance = null,
    bool|IResolvable FailOpen = null,
    double MaxConversationMessages = null,
    GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings ModelSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope">PolicyScope</a></code> | <code>string</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.prompt">Prompt</a></code> | <code>string</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>double</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | model_settings block. |

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope"></a>

```csharp
public string PolicyScope { get; set; }
```

- *Type:* string

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#policy_scope GoogleCesGuardrail#policy_scope}

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.prompt"></a>

```csharp
public string Prompt { get; set; }
```

- *Type:* string

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

##### `AllowShortUtterance`<sup>Optional</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance"></a>

```csharp
public bool|IResolvable AllowShortUtterance { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#allow_short_utterance GoogleCesGuardrail#allow_short_utterance}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

##### `MaxConversationMessages`<sup>Optional</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages"></a>

```csharp
public double MaxConversationMessages { get; set; }
```

- *Type:* double

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#max_conversation_messages GoogleCesGuardrail#max_conversation_messages}

---

##### `ModelSettings`<sup>Optional</sup> <a name="ModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings ModelSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#model_settings GoogleCesGuardrail#model_settings}

---

### GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings {
    string Model = null,
    double Temperature = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model">Model</a></code> | <code>string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature">Temperature</a></code> | <code>double</code> | If set, this temperature will be used for the LLM model. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#model GoogleCesGuardrail#model}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature"></a>

```csharp
public double Temperature { get; set; }
```

- *Type:* double

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#temperature GoogleCesGuardrail#temperature}

---

### GoogleCesGuardrailLlmPromptSecurityDefaultSettings <a name="GoogleCesGuardrailLlmPromptSecurityDefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailLlmPromptSecurityDefaultSettings {

};
```


### GoogleCesGuardrailModelSafety <a name="GoogleCesGuardrailModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailModelSafety {
    IResolvable|GoogleCesGuardrailModelSafetySafetySettings[] SafetySettings
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety.property.safetySettings">SafetySettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>[]</code> | safety_settings block. |

---

##### `SafetySettings`<sup>Required</sup> <a name="SafetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety.property.safetySettings"></a>

```csharp
public IResolvable|GoogleCesGuardrailModelSafetySafetySettings[] SafetySettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>[]

safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#safety_settings GoogleCesGuardrail#safety_settings}

---

### GoogleCesGuardrailModelSafetySafetySettings <a name="GoogleCesGuardrailModelSafetySafetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailModelSafetySafetySettings {
    string Category,
    string Threshold
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.category">Category</a></code> | <code>string</code> | The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.threshold">Threshold</a></code> | <code>string</code> | The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"]. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#category GoogleCesGuardrail#category}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.threshold"></a>

```csharp
public string Threshold { get; set; }
```

- *Type:* string

The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#threshold GoogleCesGuardrail#threshold}

---

### GoogleCesGuardrailTimeouts <a name="GoogleCesGuardrailTimeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#create GoogleCesGuardrail#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#delete GoogleCesGuardrail#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#update GoogleCesGuardrail#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#create GoogleCesGuardrail#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#delete GoogleCesGuardrail#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_ces_guardrail#update GoogleCesGuardrail#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesGuardrailActionGenerativeAnswerOutputReference <a name="GoogleCesGuardrailActionGenerativeAnswerOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailActionGenerativeAnswerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.promptInput">PromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.prompt">Prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.promptInput"></a>

```csharp
public string PromptInput { get; }
```

- *Type:* string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.prompt"></a>

```csharp
public string Prompt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailActionGenerativeAnswer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

---


### GoogleCesGuardrailActionOutputReference <a name="GoogleCesGuardrailActionOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putGenerativeAnswer">PutGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putRespondImmediately">PutRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putTransferAgent">PutTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetGenerativeAnswer">ResetGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetRespondImmediately">ResetRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetTransferAgent">ResetTransferAgent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGenerativeAnswer` <a name="PutGenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putGenerativeAnswer"></a>

```csharp
private void PutGenerativeAnswer(GoogleCesGuardrailActionGenerativeAnswer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putGenerativeAnswer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

---

##### `PutRespondImmediately` <a name="PutRespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putRespondImmediately"></a>

```csharp
private void PutRespondImmediately(GoogleCesGuardrailActionRespondImmediately Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putRespondImmediately.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

---

##### `PutTransferAgent` <a name="PutTransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putTransferAgent"></a>

```csharp
private void PutTransferAgent(GoogleCesGuardrailActionTransferAgent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putTransferAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

---

##### `ResetGenerativeAnswer` <a name="ResetGenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetGenerativeAnswer"></a>

```csharp
private void ResetGenerativeAnswer()
```

##### `ResetRespondImmediately` <a name="ResetRespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetRespondImmediately"></a>

```csharp
private void ResetRespondImmediately()
```

##### `ResetTransferAgent` <a name="ResetTransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetTransferAgent"></a>

```csharp
private void ResetTransferAgent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswer">GenerativeAnswer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference">GoogleCesGuardrailActionGenerativeAnswerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediately">RespondImmediately</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference">GoogleCesGuardrailActionRespondImmediatelyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgent">TransferAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference">GoogleCesGuardrailActionTransferAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswerInput">GenerativeAnswerInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediatelyInput">RespondImmediatelyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgentInput">TransferAgentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GenerativeAnswer`<sup>Required</sup> <a name="GenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswer"></a>

```csharp
public GoogleCesGuardrailActionGenerativeAnswerOutputReference GenerativeAnswer { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference">GoogleCesGuardrailActionGenerativeAnswerOutputReference</a>

---

##### `RespondImmediately`<sup>Required</sup> <a name="RespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediately"></a>

```csharp
public GoogleCesGuardrailActionRespondImmediatelyOutputReference RespondImmediately { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference">GoogleCesGuardrailActionRespondImmediatelyOutputReference</a>

---

##### `TransferAgent`<sup>Required</sup> <a name="TransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgent"></a>

```csharp
public GoogleCesGuardrailActionTransferAgentOutputReference TransferAgent { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference">GoogleCesGuardrailActionTransferAgentOutputReference</a>

---

##### `GenerativeAnswerInput`<sup>Optional</sup> <a name="GenerativeAnswerInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswerInput"></a>

```csharp
public GoogleCesGuardrailActionGenerativeAnswer GenerativeAnswerInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

---

##### `RespondImmediatelyInput`<sup>Optional</sup> <a name="RespondImmediatelyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediatelyInput"></a>

```csharp
public GoogleCesGuardrailActionRespondImmediately RespondImmediatelyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

---

##### `TransferAgentInput`<sup>Optional</sup> <a name="TransferAgentInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgentInput"></a>

```csharp
public GoogleCesGuardrailActionTransferAgent TransferAgentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

---


### GoogleCesGuardrailActionRespondImmediatelyOutputReference <a name="GoogleCesGuardrailActionRespondImmediatelyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailActionRespondImmediatelyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.putResponses">PutResponses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResponses` <a name="PutResponses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.putResponses"></a>

```csharp
private void PutResponses(IResolvable|GoogleCesGuardrailActionRespondImmediatelyResponses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.putResponses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responses">Responses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList">GoogleCesGuardrailActionRespondImmediatelyResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput">ResponsesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Responses`<sup>Required</sup> <a name="Responses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responses"></a>

```csharp
public GoogleCesGuardrailActionRespondImmediatelyResponsesList Responses { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList">GoogleCesGuardrailActionRespondImmediatelyResponsesList</a>

---

##### `ResponsesInput`<sup>Optional</sup> <a name="ResponsesInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput"></a>

```csharp
public IResolvable|GoogleCesGuardrailActionRespondImmediatelyResponses[] ResponsesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailActionRespondImmediately InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

---


### GoogleCesGuardrailActionRespondImmediatelyResponsesList <a name="GoogleCesGuardrailActionRespondImmediatelyResponsesList" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailActionRespondImmediatelyResponsesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.get"></a>

```csharp
private GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesGuardrailActionRespondImmediatelyResponses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>[]

---


### GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference <a name="GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesGuardrailActionRespondImmediatelyResponses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses">GoogleCesGuardrailActionRespondImmediatelyResponses</a>

---


### GoogleCesGuardrailActionTransferAgentOutputReference <a name="GoogleCesGuardrailActionTransferAgentOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailActionTransferAgentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agentInput">AgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agent">Agent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentInput`<sup>Optional</sup> <a name="AgentInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agentInput"></a>

```csharp
public string AgentInput { get; }
```

- *Type:* string

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agent"></a>

```csharp
public string Agent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailActionTransferAgent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

---


### GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailCodeCallbackAfterAgentCallback InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

---


### GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailCodeCallbackAfterModelCallback InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

---


### GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailCodeCallbackBeforeAgentCallback InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

---


### GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailCodeCallbackBeforeModelCallback InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

---


### GoogleCesGuardrailCodeCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailCodeCallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback">PutAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback">PutAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback">PutBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback">PutBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback">ResetAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterModelCallback">ResetAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback">ResetBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback">ResetBeforeModelCallback</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAfterAgentCallback` <a name="PutAfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback"></a>

```csharp
private void PutAfterAgentCallback(GoogleCesGuardrailCodeCallbackAfterAgentCallback Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `PutAfterModelCallback` <a name="PutAfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback"></a>

```csharp
private void PutAfterModelCallback(GoogleCesGuardrailCodeCallbackAfterModelCallback Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `PutBeforeAgentCallback` <a name="PutBeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback"></a>

```csharp
private void PutBeforeAgentCallback(GoogleCesGuardrailCodeCallbackBeforeAgentCallback Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `PutBeforeModelCallback` <a name="PutBeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback"></a>

```csharp
private void PutBeforeModelCallback(GoogleCesGuardrailCodeCallbackBeforeModelCallback Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `ResetAfterAgentCallback` <a name="ResetAfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback"></a>

```csharp
private void ResetAfterAgentCallback()
```

##### `ResetAfterModelCallback` <a name="ResetAfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterModelCallback"></a>

```csharp
private void ResetAfterModelCallback()
```

##### `ResetBeforeAgentCallback` <a name="ResetBeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback"></a>

```csharp
private void ResetBeforeAgentCallback()
```

##### `ResetBeforeModelCallback` <a name="ResetBeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback"></a>

```csharp
private void ResetBeforeModelCallback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallback">AfterAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallback">AfterModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback">BeforeAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallback">BeforeModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput">AfterAgentCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput">AfterModelCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput">BeforeAgentCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput">BeforeModelCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterAgentCallback`<sup>Required</sup> <a name="AfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallback"></a>

```csharp
public GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference AfterAgentCallback { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a>

---

##### `AfterModelCallback`<sup>Required</sup> <a name="AfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallback"></a>

```csharp
public GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference AfterModelCallback { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference</a>

---

##### `BeforeAgentCallback`<sup>Required</sup> <a name="BeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback"></a>

```csharp
public GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference BeforeAgentCallback { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a>

---

##### `BeforeModelCallback`<sup>Required</sup> <a name="BeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallback"></a>

```csharp
public GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference BeforeModelCallback { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a>

---

##### `AfterAgentCallbackInput`<sup>Optional</sup> <a name="AfterAgentCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput"></a>

```csharp
public GoogleCesGuardrailCodeCallbackAfterAgentCallback AfterAgentCallbackInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `AfterModelCallbackInput`<sup>Optional</sup> <a name="AfterModelCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput"></a>

```csharp
public GoogleCesGuardrailCodeCallbackAfterModelCallback AfterModelCallbackInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `BeforeAgentCallbackInput`<sup>Optional</sup> <a name="BeforeAgentCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput"></a>

```csharp
public GoogleCesGuardrailCodeCallbackBeforeAgentCallback BeforeAgentCallbackInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `BeforeModelCallbackInput`<sup>Optional</sup> <a name="BeforeModelCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput"></a>

```csharp
public GoogleCesGuardrailCodeCallbackBeforeModelCallback BeforeModelCallbackInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailCodeCallback InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

---


### GoogleCesGuardrailContentFilterOutputReference <a name="GoogleCesGuardrailContentFilterOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailContentFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContents">ResetBannedContents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse">ResetBannedContentsInAgentResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput">ResetBannedContentsInUserInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetDisregardDiacritics">ResetDisregardDiacritics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBannedContents` <a name="ResetBannedContents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContents"></a>

```csharp
private void ResetBannedContents()
```

##### `ResetBannedContentsInAgentResponse` <a name="ResetBannedContentsInAgentResponse" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse"></a>

```csharp
private void ResetBannedContentsInAgentResponse()
```

##### `ResetBannedContentsInUserInput` <a name="ResetBannedContentsInUserInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput"></a>

```csharp
private void ResetBannedContentsInUserInput()
```

##### `ResetDisregardDiacritics` <a name="ResetDisregardDiacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetDisregardDiacritics"></a>

```csharp
private void ResetDisregardDiacritics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput">BannedContentsInAgentResponseInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInput">BannedContentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput">BannedContentsInUserInputInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput">DisregardDiacriticsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchTypeInput">MatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContents">BannedContents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse">BannedContentsInAgentResponse</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput">BannedContentsInUserInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacritics">DisregardDiacritics</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchType">MatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BannedContentsInAgentResponseInput`<sup>Optional</sup> <a name="BannedContentsInAgentResponseInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput"></a>

```csharp
public string[] BannedContentsInAgentResponseInput { get; }
```

- *Type:* string[]

---

##### `BannedContentsInput`<sup>Optional</sup> <a name="BannedContentsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInput"></a>

```csharp
public string[] BannedContentsInput { get; }
```

- *Type:* string[]

---

##### `BannedContentsInUserInputInput`<sup>Optional</sup> <a name="BannedContentsInUserInputInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput"></a>

```csharp
public string[] BannedContentsInUserInputInput { get; }
```

- *Type:* string[]

---

##### `DisregardDiacriticsInput`<sup>Optional</sup> <a name="DisregardDiacriticsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput"></a>

```csharp
public bool|IResolvable DisregardDiacriticsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MatchTypeInput`<sup>Optional</sup> <a name="MatchTypeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchTypeInput"></a>

```csharp
public string MatchTypeInput { get; }
```

- *Type:* string

---

##### `BannedContents`<sup>Required</sup> <a name="BannedContents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContents"></a>

```csharp
public string[] BannedContents { get; }
```

- *Type:* string[]

---

##### `BannedContentsInAgentResponse`<sup>Required</sup> <a name="BannedContentsInAgentResponse" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse"></a>

```csharp
public string[] BannedContentsInAgentResponse { get; }
```

- *Type:* string[]

---

##### `BannedContentsInUserInput`<sup>Required</sup> <a name="BannedContentsInUserInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput"></a>

```csharp
public string[] BannedContentsInUserInput { get; }
```

- *Type:* string[]

---

##### `DisregardDiacritics`<sup>Required</sup> <a name="DisregardDiacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacritics"></a>

```csharp
public bool|IResolvable DisregardDiacritics { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchType"></a>

```csharp
public string MatchType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailContentFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

---


### GoogleCesGuardrailLlmPolicyModelSettingsOutputReference <a name="GoogleCesGuardrailLlmPolicyModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailLlmPolicyModelSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature"></a>

```csharp
private void ResetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```csharp
public double TemperatureInput { get; }
```

- *Type:* double

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailLlmPolicyModelSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

---


### GoogleCesGuardrailLlmPolicyOutputReference <a name="GoogleCesGuardrailLlmPolicyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailLlmPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings">PutModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance">ResetAllowShortUtterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages">ResetMaxConversationMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetModelSettings">ResetModelSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelSettings` <a name="PutModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings"></a>

```csharp
private void PutModelSettings(GoogleCesGuardrailLlmPolicyModelSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

---

##### `ResetAllowShortUtterance` <a name="ResetAllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance"></a>

```csharp
private void ResetAllowShortUtterance()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetFailOpen"></a>

```csharp
private void ResetFailOpen()
```

##### `ResetMaxConversationMessages` <a name="ResetMaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages"></a>

```csharp
private void ResetMaxConversationMessages()
```

##### `ResetModelSettings` <a name="ResetModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetModelSettings"></a>

```csharp
private void ResetModelSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput">AllowShortUtteranceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput">MaxConversationMessagesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettingsInput">ModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScopeInput">PolicyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.promptInput">PromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScope">PolicyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.prompt">Prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelSettings`<sup>Required</sup> <a name="ModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettings"></a>

```csharp
public GoogleCesGuardrailLlmPolicyModelSettingsOutputReference ModelSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPolicyModelSettingsOutputReference</a>

---

##### `AllowShortUtteranceInput`<sup>Optional</sup> <a name="AllowShortUtteranceInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput"></a>

```csharp
public bool|IResolvable AllowShortUtteranceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpenInput"></a>

```csharp
public bool|IResolvable FailOpenInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxConversationMessagesInput`<sup>Optional</sup> <a name="MaxConversationMessagesInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput"></a>

```csharp
public double MaxConversationMessagesInput { get; }
```

- *Type:* double

---

##### `ModelSettingsInput`<sup>Optional</sup> <a name="ModelSettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettingsInput"></a>

```csharp
public GoogleCesGuardrailLlmPolicyModelSettings ModelSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

---

##### `PolicyScopeInput`<sup>Optional</sup> <a name="PolicyScopeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScopeInput"></a>

```csharp
public string PolicyScopeInput { get; }
```

- *Type:* string

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.promptInput"></a>

```csharp
public string PromptInput { get; }
```

- *Type:* string

---

##### `AllowShortUtterance`<sup>Required</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtterance"></a>

```csharp
public bool|IResolvable AllowShortUtterance { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxConversationMessages`<sup>Required</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessages"></a>

```csharp
public double MaxConversationMessages { get; }
```

- *Type:* double

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScope"></a>

```csharp
public string PolicyScope { get; }
```

- *Type:* string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.prompt"></a>

```csharp
public string Prompt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailLlmPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

---


### GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature"></a>

```csharp
private void ResetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```csharp
public double TemperatureInput { get; }
```

- *Type:* double

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---


### GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings">PutModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance">ResetAllowShortUtterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages">ResetMaxConversationMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings">ResetModelSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelSettings` <a name="PutModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings"></a>

```csharp
private void PutModelSettings(GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `ResetAllowShortUtterance` <a name="ResetAllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance"></a>

```csharp
private void ResetAllowShortUtterance()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen"></a>

```csharp
private void ResetFailOpen()
```

##### `ResetMaxConversationMessages` <a name="ResetMaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages"></a>

```csharp
private void ResetMaxConversationMessages()
```

##### `ResetModelSettings` <a name="ResetModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings"></a>

```csharp
private void ResetModelSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput">AllowShortUtteranceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput">MaxConversationMessagesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput">ModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput">PolicyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput">PromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope">PolicyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt">Prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelSettings`<sup>Required</sup> <a name="ModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference ModelSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a>

---

##### `AllowShortUtteranceInput`<sup>Optional</sup> <a name="AllowShortUtteranceInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput"></a>

```csharp
public bool|IResolvable AllowShortUtteranceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput"></a>

```csharp
public bool|IResolvable FailOpenInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxConversationMessagesInput`<sup>Optional</sup> <a name="MaxConversationMessagesInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput"></a>

```csharp
public double MaxConversationMessagesInput { get; }
```

- *Type:* double

---

##### `ModelSettingsInput`<sup>Optional</sup> <a name="ModelSettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings ModelSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `PolicyScopeInput`<sup>Optional</sup> <a name="PolicyScopeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput"></a>

```csharp
public string PolicyScopeInput { get; }
```

- *Type:* string

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput"></a>

```csharp
public string PromptInput { get; }
```

- *Type:* string

---

##### `AllowShortUtterance`<sup>Required</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance"></a>

```csharp
public bool|IResolvable AllowShortUtterance { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxConversationMessages`<sup>Required</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages"></a>

```csharp
public double MaxConversationMessages { get; }
```

- *Type:* double

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope"></a>

```csharp
public string PolicyScope { get; }
```

- *Type:* string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt"></a>

```csharp
public string Prompt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurityCustomPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

---


### GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate">DefaultPromptTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultPromptTemplate`<sup>Required</sup> <a name="DefaultPromptTemplate" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate"></a>

```csharp
public string DefaultPromptTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurityDefaultSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

---


### GoogleCesGuardrailLlmPromptSecurityOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailLlmPromptSecurityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy">PutCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings">PutDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy">ResetCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings">ResetDefaultSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPolicy` <a name="PutCustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy"></a>

```csharp
private void PutCustomPolicy(GoogleCesGuardrailLlmPromptSecurityCustomPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `PutDefaultSettings` <a name="PutDefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings"></a>

```csharp
private void PutDefaultSettings(GoogleCesGuardrailLlmPromptSecurityDefaultSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `ResetCustomPolicy` <a name="ResetCustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy"></a>

```csharp
private void ResetCustomPolicy()
```

##### `ResetDefaultSettings` <a name="ResetDefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings"></a>

```csharp
private void ResetDefaultSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicy">CustomPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings">DefaultSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput">CustomPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput">DefaultSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomPolicy`<sup>Required</sup> <a name="CustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicy"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference CustomPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a>

---

##### `DefaultSettings`<sup>Required</sup> <a name="DefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference DefaultSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a>

---

##### `CustomPolicyInput`<sup>Optional</sup> <a name="CustomPolicyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurityCustomPolicy CustomPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `DefaultSettingsInput`<sup>Optional</sup> <a name="DefaultSettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurityDefaultSettings DefaultSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailLlmPromptSecurity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

---


### GoogleCesGuardrailModelSafetyOutputReference <a name="GoogleCesGuardrailModelSafetyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailModelSafetyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.putSafetySettings">PutSafetySettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSafetySettings` <a name="PutSafetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.putSafetySettings"></a>

```csharp
private void PutSafetySettings(IResolvable|GoogleCesGuardrailModelSafetySafetySettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.putSafetySettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettings">SafetySettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList">GoogleCesGuardrailModelSafetySafetySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettingsInput">SafetySettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SafetySettings`<sup>Required</sup> <a name="SafetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettings"></a>

```csharp
public GoogleCesGuardrailModelSafetySafetySettingsList SafetySettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList">GoogleCesGuardrailModelSafetySafetySettingsList</a>

---

##### `SafetySettingsInput`<sup>Optional</sup> <a name="SafetySettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettingsInput"></a>

```csharp
public IResolvable|GoogleCesGuardrailModelSafetySafetySettings[] SafetySettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.internalValue"></a>

```csharp
public GoogleCesGuardrailModelSafety InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

---


### GoogleCesGuardrailModelSafetySafetySettingsList <a name="GoogleCesGuardrailModelSafetySafetySettingsList" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailModelSafetySafetySettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.get"></a>

```csharp
private GoogleCesGuardrailModelSafetySafetySettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesGuardrailModelSafetySafetySettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>[]

---


### GoogleCesGuardrailModelSafetySafetySettingsOutputReference <a name="GoogleCesGuardrailModelSafetySafetySettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailModelSafetySafetySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.threshold">Threshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput"></a>

```csharp
public string ThresholdInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.threshold"></a>

```csharp
public string Threshold { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesGuardrailModelSafetySafetySettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings">GoogleCesGuardrailModelSafetySafetySettings</a>

---


### GoogleCesGuardrailTimeoutsOutputReference <a name="GoogleCesGuardrailTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesGuardrailTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesGuardrailTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

---



