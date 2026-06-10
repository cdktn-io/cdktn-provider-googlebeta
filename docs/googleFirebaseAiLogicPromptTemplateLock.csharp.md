# `googleFirebaseAiLogicPromptTemplateLock` Submodule <a name="`googleFirebaseAiLogicPromptTemplateLock` Submodule" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAiLogicPromptTemplateLock <a name="GoogleFirebaseAiLogicPromptTemplateLock" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_ai_logic_prompt_template_lock google_firebase_ai_logic_prompt_template_lock}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAiLogicPromptTemplateLock(Construct Scope, string Id, GoogleFirebaseAiLogicPromptTemplateLockConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig">GoogleFirebaseAiLogicPromptTemplateLockConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig">GoogleFirebaseAiLogicPromptTemplateLockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetRegionalPropagationDisabled">ResetRegionalPropagationDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleFirebaseAiLogicPromptTemplateLockTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegionalPropagationDisabled` <a name="ResetRegionalPropagationDisabled" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetRegionalPropagationDisabled"></a>

```csharp
private void ResetRegionalPropagationDisabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseAiLogicPromptTemplateLock resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseAiLogicPromptTemplateLock.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseAiLogicPromptTemplateLock.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseAiLogicPromptTemplateLock.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseAiLogicPromptTemplateLock.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleFirebaseAiLogicPromptTemplateLock resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseAiLogicPromptTemplateLock to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseAiLogicPromptTemplateLock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAiLogicPromptTemplateLock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.locked">Locked</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference">GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.regionalPropagationDisabledInput">RegionalPropagationDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.templateIdInput">TemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.regionalPropagationDisabled">RegionalPropagationDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.templateId">TemplateId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.locked"></a>

```csharp
public IResolvable Locked { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.timeouts"></a>

```csharp
public GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference">GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionalPropagationDisabledInput`<sup>Optional</sup> <a name="RegionalPropagationDisabledInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.regionalPropagationDisabledInput"></a>

```csharp
public bool|IResolvable RegionalPropagationDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TemplateIdInput`<sup>Optional</sup> <a name="TemplateIdInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.templateIdInput"></a>

```csharp
public string TemplateIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleFirebaseAiLogicPromptTemplateLockTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RegionalPropagationDisabled`<sup>Required</sup> <a name="RegionalPropagationDisabled" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.regionalPropagationDisabled"></a>

```csharp
public bool|IResolvable RegionalPropagationDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.templateId"></a>

```csharp
public string TemplateId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAiLogicPromptTemplateLockConfig <a name="GoogleFirebaseAiLogicPromptTemplateLockConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAiLogicPromptTemplateLockConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string TemplateId,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    bool|IResolvable RegionalPropagationDisabled = null,
    GoogleFirebaseAiLogicPromptTemplateLockTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.location">Location</a></code> | <code>string</code> | The location of the prompt template. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.templateId">TemplateId</a></code> | <code>string</code> | The ID of the prompt template. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#id GoogleFirebaseAiLogicPromptTemplateLock#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#project GoogleFirebaseAiLogicPromptTemplateLock#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.regionalPropagationDisabled">RegionalPropagationDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | For the 'global' location only. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#location GoogleFirebaseAiLogicPromptTemplateLock#location}

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.templateId"></a>

```csharp
public string TemplateId { get; set; }
```

- *Type:* string

The ID of the prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#template_id GoogleFirebaseAiLogicPromptTemplateLock#template_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#deletion_policy GoogleFirebaseAiLogicPromptTemplateLock#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#id GoogleFirebaseAiLogicPromptTemplateLock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#project GoogleFirebaseAiLogicPromptTemplateLock#project}.

---

##### `RegionalPropagationDisabled`<sup>Optional</sup> <a name="RegionalPropagationDisabled" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.regionalPropagationDisabled"></a>

```csharp
public bool|IResolvable RegionalPropagationDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

For the 'global' location only.

If true, the modifyLock operation will
apply to the global region only. Otherwise, the operation will also
propagate to all applicable regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#regional_propagation_disabled GoogleFirebaseAiLogicPromptTemplateLock#regional_propagation_disabled}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.timeouts"></a>

```csharp
public GoogleFirebaseAiLogicPromptTemplateLockTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#timeouts GoogleFirebaseAiLogicPromptTemplateLock#timeouts}

---

### GoogleFirebaseAiLogicPromptTemplateLockTimeouts <a name="GoogleFirebaseAiLogicPromptTemplateLockTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAiLogicPromptTemplateLockTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#create GoogleFirebaseAiLogicPromptTemplateLock#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#delete GoogleFirebaseAiLogicPromptTemplateLock#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#create GoogleFirebaseAiLogicPromptTemplateLock#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#delete GoogleFirebaseAiLogicPromptTemplateLock#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference <a name="GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleFirebaseAiLogicPromptTemplateLockTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a>

---



