# `googleSaasRuntimeRolloutKind` Submodule <a name="`googleSaasRuntimeRolloutKind` Submodule" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSaasRuntimeRolloutKind <a name="GoogleSaasRuntimeRolloutKind" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind google_saas_runtime_rollout_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeRolloutKind(Construct Scope, string Id, GoogleSaasRuntimeRolloutKindConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig">GoogleSaasRuntimeRolloutKindConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig">GoogleSaasRuntimeRolloutKindConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putErrorBudget">PutErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetErrorBudget">ResetErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy">ResetRolloutOrchestrationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUnitFilter">ResetUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUpdateUnitKindStrategy">ResetUpdateUnitKindStrategy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutErrorBudget` <a name="PutErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putErrorBudget"></a>

```csharp
private void PutErrorBudget(GoogleSaasRuntimeRolloutKindErrorBudget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putErrorBudget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleSaasRuntimeRolloutKindTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetErrorBudget` <a name="ResetErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetErrorBudget"></a>

```csharp
private void ResetErrorBudget()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRolloutOrchestrationStrategy` <a name="ResetRolloutOrchestrationStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy"></a>

```csharp
private void ResetRolloutOrchestrationStrategy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUnitFilter` <a name="ResetUnitFilter" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUnitFilter"></a>

```csharp
private void ResetUnitFilter()
```

##### `ResetUpdateUnitKindStrategy` <a name="ResetUpdateUnitKindStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUpdateUnitKindStrategy"></a>

```csharp
private void ResetUpdateUnitKindStrategy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSaasRuntimeRolloutKind.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSaasRuntimeRolloutKind.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSaasRuntimeRolloutKind.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSaasRuntimeRolloutKind.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleSaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSaasRuntimeRolloutKind to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSaasRuntimeRolloutKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSaasRuntimeRolloutKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudget">ErrorBudget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference">GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference">GoogleSaasRuntimeRolloutKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudgetInput">ErrorBudgetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindIdInput">RolloutKindIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput">RolloutOrchestrationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilterInput">UnitFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKindInput">UnitKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategyInput">UpdateUnitKindStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindId">RolloutKindId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy">RolloutOrchestrationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilter">UnitFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKind">UnitKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategy">UpdateUnitKindStrategy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ErrorBudget`<sup>Required</sup> <a name="ErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudget"></a>

```csharp
public GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference ErrorBudget { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference">GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeouts"></a>

```csharp
public GoogleSaasRuntimeRolloutKindTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference">GoogleSaasRuntimeRolloutKindTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ErrorBudgetInput`<sup>Optional</sup> <a name="ErrorBudgetInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudgetInput"></a>

```csharp
public GoogleSaasRuntimeRolloutKindErrorBudget ErrorBudgetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RolloutKindIdInput`<sup>Optional</sup> <a name="RolloutKindIdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindIdInput"></a>

```csharp
public string RolloutKindIdInput { get; }
```

- *Type:* string

---

##### `RolloutOrchestrationStrategyInput`<sup>Optional</sup> <a name="RolloutOrchestrationStrategyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput"></a>

```csharp
public string RolloutOrchestrationStrategyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleSaasRuntimeRolloutKindTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a>

---

##### `UnitFilterInput`<sup>Optional</sup> <a name="UnitFilterInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilterInput"></a>

```csharp
public string UnitFilterInput { get; }
```

- *Type:* string

---

##### `UnitKindInput`<sup>Optional</sup> <a name="UnitKindInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKindInput"></a>

```csharp
public string UnitKindInput { get; }
```

- *Type:* string

---

##### `UpdateUnitKindStrategyInput`<sup>Optional</sup> <a name="UpdateUnitKindStrategyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategyInput"></a>

```csharp
public string UpdateUnitKindStrategyInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RolloutKindId`<sup>Required</sup> <a name="RolloutKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindId"></a>

```csharp
public string RolloutKindId { get; }
```

- *Type:* string

---

##### `RolloutOrchestrationStrategy`<sup>Required</sup> <a name="RolloutOrchestrationStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy"></a>

```csharp
public string RolloutOrchestrationStrategy { get; }
```

- *Type:* string

---

##### `UnitFilter`<sup>Required</sup> <a name="UnitFilter" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilter"></a>

```csharp
public string UnitFilter { get; }
```

- *Type:* string

---

##### `UnitKind`<sup>Required</sup> <a name="UnitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKind"></a>

```csharp
public string UnitKind { get; }
```

- *Type:* string

---

##### `UpdateUnitKindStrategy`<sup>Required</sup> <a name="UpdateUnitKindStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategy"></a>

```csharp
public string UpdateUnitKindStrategy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSaasRuntimeRolloutKindConfig <a name="GoogleSaasRuntimeRolloutKindConfig" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeRolloutKindConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string RolloutKindId,
    string UnitKind,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    GoogleSaasRuntimeRolloutKindErrorBudget ErrorBudget = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    string RolloutOrchestrationStrategy = null,
    GoogleSaasRuntimeRolloutKindTimeouts Timeouts = null,
    string UnitFilter = null,
    string UpdateUnitKindStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutKindId">RolloutKindId</a></code> | <code>string</code> | The ID value for the new rollout kind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitKind">UnitKind</a></code> | <code>string</code> | UnitKind that this rollout kind corresponds to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.errorBudget">ErrorBudget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a></code> | error_budget block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#id GoogleSaasRuntimeRolloutKind#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#project GoogleSaasRuntimeRolloutKind#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy">RolloutOrchestrationStrategy</a></code> | <code>string</code> | The strategy used for executing a Rollout. This is a required field. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitFilter">UnitFilter</a></code> | <code>string</code> | CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy">UpdateUnitKindStrategy</a></code> | <code>string</code> | The config for updating the unit kind. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#location GoogleSaasRuntimeRolloutKind#location}

---

##### `RolloutKindId`<sup>Required</sup> <a name="RolloutKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutKindId"></a>

```csharp
public string RolloutKindId { get; set; }
```

- *Type:* string

The ID value for the new rollout kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#rollout_kind_id GoogleSaasRuntimeRolloutKind#rollout_kind_id}

---

##### `UnitKind`<sup>Required</sup> <a name="UnitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitKind"></a>

```csharp
public string UnitKind { get; set; }
```

- *Type:* string

UnitKind that this rollout kind corresponds to.

Rollouts stemming from this
rollout kind will target the units of this unit kind. In other words, this
defines the population of target units to be upgraded by rollouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#unit_kind GoogleSaasRuntimeRolloutKind#unit_kind}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#annotations GoogleSaasRuntimeRolloutKind#annotations}

---

##### `ErrorBudget`<sup>Optional</sup> <a name="ErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.errorBudget"></a>

```csharp
public GoogleSaasRuntimeRolloutKindErrorBudget ErrorBudget { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

error_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#error_budget GoogleSaasRuntimeRolloutKind#error_budget}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#id GoogleSaasRuntimeRolloutKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#labels GoogleSaasRuntimeRolloutKind#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#project GoogleSaasRuntimeRolloutKind#project}.

---

##### `RolloutOrchestrationStrategy`<sup>Optional</sup> <a name="RolloutOrchestrationStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy"></a>

```csharp
public string RolloutOrchestrationStrategy { get; set; }
```

- *Type:* string

The strategy used for executing a Rollout. This is a required field.

There are two supported values strategies which are used to control a rollout.

* "Google.Cloud.Simple.AllAtOnce"
* "Google.Cloud.Simple.OneLocationAtATime"

A rollout with one of these simple strategies will rollout across
all locations defined in the associated UnitKind's Saas Locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#rollout_orchestration_strategy GoogleSaasRuntimeRolloutKind#rollout_orchestration_strategy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.timeouts"></a>

```csharp
public GoogleSaasRuntimeRolloutKindTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#timeouts GoogleSaasRuntimeRolloutKind#timeouts}

---

##### `UnitFilter`<sup>Optional</sup> <a name="UnitFilter" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitFilter"></a>

```csharp
public string UnitFilter { get; set; }
```

- *Type:* string

CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#unit_filter GoogleSaasRuntimeRolloutKind#unit_filter}

---

##### `UpdateUnitKindStrategy`<sup>Optional</sup> <a name="UpdateUnitKindStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy"></a>

```csharp
public string UpdateUnitKindStrategy { get; set; }
```

- *Type:* string

The config for updating the unit kind.

By default, the unit kind will be
updated on the rollout start.
Possible values:
UPDATE_UNIT_KIND_STRATEGY_ON_START
UPDATE_UNIT_KIND_STRATEGY_NEVER Possible values: ["UPDATE_UNIT_KIND_STRATEGY_ON_START", "UPDATE_UNIT_KIND_STRATEGY_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#update_unit_kind_strategy GoogleSaasRuntimeRolloutKind#update_unit_kind_strategy}

---

### GoogleSaasRuntimeRolloutKindErrorBudget <a name="GoogleSaasRuntimeRolloutKindErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeRolloutKindErrorBudget {
    double AllowedCount = null,
    double AllowedPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedCount">AllowedCount</a></code> | <code>double</code> | The maximum number of failed units allowed in a location without pausing the rollout. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedPercentage">AllowedPercentage</a></code> | <code>double</code> | The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout. |

---

##### `AllowedCount`<sup>Optional</sup> <a name="AllowedCount" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedCount"></a>

```csharp
public double AllowedCount { get; set; }
```

- *Type:* double

The maximum number of failed units allowed in a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#allowed_count GoogleSaasRuntimeRolloutKind#allowed_count}

---

##### `AllowedPercentage`<sup>Optional</sup> <a name="AllowedPercentage" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedPercentage"></a>

```csharp
public double AllowedPercentage { get; set; }
```

- *Type:* double

The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#allowed_percentage GoogleSaasRuntimeRolloutKind#allowed_percentage}

---

### GoogleSaasRuntimeRolloutKindTimeouts <a name="GoogleSaasRuntimeRolloutKindTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeRolloutKindTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#create GoogleSaasRuntimeRolloutKind#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#delete GoogleSaasRuntimeRolloutKind#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#update GoogleSaasRuntimeRolloutKind#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#create GoogleSaasRuntimeRolloutKind#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#delete GoogleSaasRuntimeRolloutKind#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_rollout_kind#update GoogleSaasRuntimeRolloutKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference <a name="GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount">ResetAllowedCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage">ResetAllowedPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedCount` <a name="ResetAllowedCount" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount"></a>

```csharp
private void ResetAllowedCount()
```

##### `ResetAllowedPercentage` <a name="ResetAllowedPercentage" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage"></a>

```csharp
private void ResetAllowedPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput">AllowedCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput">AllowedPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount">AllowedCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage">AllowedPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedCountInput`<sup>Optional</sup> <a name="AllowedCountInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput"></a>

```csharp
public double AllowedCountInput { get; }
```

- *Type:* double

---

##### `AllowedPercentageInput`<sup>Optional</sup> <a name="AllowedPercentageInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput"></a>

```csharp
public double AllowedPercentageInput { get; }
```

- *Type:* double

---

##### `AllowedCount`<sup>Required</sup> <a name="AllowedCount" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount"></a>

```csharp
public double AllowedCount { get; }
```

- *Type:* double

---

##### `AllowedPercentage`<sup>Required</sup> <a name="AllowedPercentage" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage"></a>

```csharp
public double AllowedPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue"></a>

```csharp
public GoogleSaasRuntimeRolloutKindErrorBudget InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

---


### GoogleSaasRuntimeRolloutKindTimeoutsOutputReference <a name="GoogleSaasRuntimeRolloutKindTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSaasRuntimeRolloutKindTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleSaasRuntimeRolloutKindTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a>

---



